from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken, ProfileSerializer
from .models import Profile
from rest_framework.parsers import MultiPartParser, FormParser

# from google.oauth2 import id_token
# from google.auth.transport import requests


@api_view(['GET'])
def current_user(request):

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileUpdateAPI(generics.UpdateAPIView):
    lookup_field = "user_pk"
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileAPI(generics.RetrieveAPIView):
    parser_classes = (MultiPartParser, FormParser)

    authentication_classes = []
    permission_classes = []

    lookup_field = "user_pk"
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileDelteAPI(generics.DestroyAPIView):
    lookup_field = "id"
    # filterset_fields = ["user_pk"]
    queryset = User.objects.all()
    serializer_class = UserSerializer
