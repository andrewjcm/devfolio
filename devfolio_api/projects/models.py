from django.db import models
from django.contrib.auth.models import User

class Project(models.Model):
    devloper = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=250, blank=False, null=False)
    description = models.TextField(blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)


class ProgrammingLanguage(models.Model):
    name = models.CharField(max_length=25)
    project = models.ManyToManyField(Project)

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    image_url = models.ImageField(upload_to='project_images', blank=True, null=True)

