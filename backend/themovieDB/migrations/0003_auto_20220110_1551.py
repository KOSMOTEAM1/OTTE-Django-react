# Generated by Django 3.2.9 on 2022-01-10 06:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('themovieDB', '0002_alter_movie_release_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='TV',
            fields=[
                ('otteid', models.AutoField(primary_key=True, serialize=False)),
                ('episode_run_time', models.IntegerField(null=True)),
                ('first_air_date', models.DateField(null=True)),
                ('last_air_date', models.DateField(null=True)),
                ('themovieid', models.IntegerField(null=True)),
                ('in_production', models.BooleanField(null=True)),
                ('original_language', models.CharField(max_length=10, null=True)),
                ('original_title', models.CharField(max_length=300)),
                ('overview', models.TextField(null=True)),
                ('popularity', models.FloatField(null=True)),
                ('poster_path', models.CharField(max_length=100, null=True)),
                ('status', models.CharField(max_length=30, null=True)),
                ('imdbscore', models.FloatField(null=True)),
                ('ottescore', models.FloatField(null=True)),
            ],
        ),
        migrations.RenameModel(
            old_name='genres',
            new_name='genresinmovie',
        ),
        migrations.CreateModel(
            name='TVseasons',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('air_date', models.DateField(null=True)),
                ('episode_count', models.IntegerField(null=True)),
                ('title', models.CharField(max_length=10, null=True)),
                ('overview', models.TextField(null=True)),
                ('poster_path', models.CharField(max_length=100, null=True)),
                ('otteid', models.ForeignKey(db_column='otteid', null=True, on_delete=django.db.models.deletion.CASCADE, to='themovieDB.tv')),
            ],
        ),
    ]
