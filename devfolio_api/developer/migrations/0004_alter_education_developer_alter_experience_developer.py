# Generated by Django 4.0.4 on 2022-04-24 18:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('developer', '0003_experience_alter_education_developer_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='education',
            name='developer',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='education', to='developer.developer'),
        ),
        migrations.AlterField(
            model_name='experience',
            name='developer',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='experience', to='developer.developer'),
        ),
    ]
