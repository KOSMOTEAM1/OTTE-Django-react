# Generated by Django 3.2.9 on 2022-02-16 06:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('themovieDB', '0016_review_reviewnumber'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='reviewnumber',
        ),
    ]