from rest_framework import viewsets, serializers, permissions

from projects.models import Project, ProgrammingLanguage, ProjectImage
from django.contrib.auth.models import User

class ProjectSerializer(serializers.ModelSerializer):
    developer = serializers.SlugRelatedField(
        many=True,
        read_only=False,
        slug_field='username',
        queryset = User.objects.all()
    )
    languages = serializers.SlugRelatedField(
        many=True,
        read_only=False,
        slug_field='name',
        queryset = ProgrammingLanguage.objects.all()
    )

    images = serializers.SlugRelatedField(
        many=True,
        read_only=False,
        slug_field='image_url',
        queryset = ProjectImage.objects.all()
    ) 

    class Meta:
        model = Project
        fields = [
            'developer',
            'name',
            'description',
            'link',
            'images',
            'languages'
        ]

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
