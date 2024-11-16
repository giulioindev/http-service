# Generated by Django 5.1.1 on 2024-11-15 13:51

import django.core.validators
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RequestDetail',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('status', models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(200), django.core.validators.MaxValueValidator(500)])),
                ('errors', models.JSONField()),
                ('data', models.JSONField()),
            ],
            options={
                'verbose_name_plural': 'request_details',
                'db_table': 'request_details',
            },
        ),
    ]