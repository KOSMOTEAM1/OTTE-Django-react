from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListPost.as_view()),
    path('<int:pk>/', views.DetailPost.as_view()),
    # 최신영화이름, 오떼아이디 100개만 출력
    path('recent', views.RecentPost.as_view()),
]