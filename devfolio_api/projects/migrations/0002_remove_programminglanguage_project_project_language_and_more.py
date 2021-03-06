# Generated by Django 4.0.4 on 2022-04-23 23:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='programminglanguage',
            name='project',
        ),
        migrations.AddField(
            model_name='project',
            name='language',
            field=models.ManyToManyField(related_name='project', to='projects.programminglanguage'),
        ),
        migrations.AlterField(
            model_name='projectimage',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='projects.project'),
        ),
    ]
