from django.db import models

from developer.models import Developer


class ProgrammingLanguage(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self) -> str:
        return self.name


class Project(models.Model):
    devloper = models.ForeignKey(Developer, on_delete=models.CASCADE)
    name = models.CharField(max_length=250, blank=False, null=False)
    description = models.TextField(blank=True, null=True)
    link = models.CharField(max_length=250, blank=True, null=True)
    language = models.ManyToManyField(ProgrammingLanguage, related_name='project')

    def __str__(self) -> str:
        return self.name


class ProjectImage(models.Model):
    project = models.ForeignKey(Project, related_name='images', on_delete=models.CASCADE)
    image_url = models.ImageField(upload_to='project_images', blank=True, null=True)
