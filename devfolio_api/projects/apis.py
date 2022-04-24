from rest_framework import viewsets, serializers, permissions

from projects.models import Project, ProgrammingLanguage, ProjectImage

class ProjectSerializer(serializers.ModelSerializer):

    images = serializers.SlugRelatedField(
        many=True,
        read_only=False,
        slug_field='image_url',
        queryset = ProjectImage.objects.all()
    ) 

    class Meta:
        model = Project
        fields = '__all__'

    def create(self, validated_data):
        languages_data = validated_data.pop('languages')
        images_data = validated_data.pop('images')
        project = Project.objects.create(**validated_data)
        for language_data in languages_data:
            ProgrammingLanguage.objects.get_or_create(project=project, **language_data)
        for image_data in images_data:
            ProjectImage.objects.create(project=project, **image_data)
        return project

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
