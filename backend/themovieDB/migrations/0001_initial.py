# Generated by Django 3.2.9 on 2022-01-03 04:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='movie',
            fields=[
                ('otteid', models.AutoField(primary_key=True, serialize=False)),
                ('adult', models.BooleanField(null=True)),
                ('collection_id', models.IntegerField(null=True)),
                ('collection_name', models.CharField(max_length=10, null=True)),
                ('themovieid', models.CharField(max_length=10)),
                ('imdb_id', models.CharField(max_length=10, null=True)),
                ('original_language', models.CharField(max_length=10, null=True)),
                ('original_title', models.CharField(max_length=100)),
                ('overview', models.TextField(null=True)),
                ('release_date', models.CharField(max_length=10, null=True)),
                ('runtime', models.IntegerField(null=True)),
                ('status', models.CharField(max_length=10, null=True)),
                ('title', models.CharField(max_length=100, null=True)),
            ],
        ),
    ]
