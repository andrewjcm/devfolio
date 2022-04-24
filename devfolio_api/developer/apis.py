from rest_framework import viewsets, serializers, permissions
from rest_framework.decorators import action
from rest_framework.response import Response

from django.contrib.auth.models import User
from developer.models import Developer, Education, Experience


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'


class DeveloperSerializer(serializers.ModelSerializer):
    education = EducationSerializer(many=True, read_only=True, required=False)
    experience = ExperienceSerializer(many=True, read_only=True, required=False)

    class Meta:
        model = Developer
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    developer = DeveloperSerializer(read_only=True, required=False)

    class Meta:
        model = User
        exclude =('password',)
        

class DeveloperViewSet(viewsets.ModelViewSet):
    queryset = Developer.objects.all()
    serializer_class = DeveloperSerializer


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
