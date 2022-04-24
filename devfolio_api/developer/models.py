from django.db import models
from django.contrib.auth.models import User


class Developer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.user.username


class Education(models.Model):
    developer = models.ForeignKey(Developer, on_delete=models.CASCADE)
    school = models.CharField(max_length=50)
    degree = models.CharField(max_length=50)
    field = models.CharField(max_length=50)
    end_date = models.DateField()


class Experince(models.Model):
    developer = models.ForeignKey(Developer, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    start_date = models.DateField()
    end_date = models.DateField(null=True)
    current = models.BooleanField(default=False)
    description = models.TextField()
