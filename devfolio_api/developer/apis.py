from rest_framework import viewsets, serializers, permissions

from developer.models import Developer, Education, Experience

class DeveloperSerializer(serializers.ModelSerializer):
    education = serializers.StringRelatedField(many=True)
    experience = serializers.StringRelatedField(many=True)

    class Meta:
        model = Developer
        fields = '__all__'

    def create(self, validated_data):
        education_data = validated_data.pop('education')
        experience_data = validated_data.pop('experience')
        developer = Developer.objects.create(**validated_data)
        for edu in education_data:
            Education.objects.create(developer=developer, **edu)
        for exp in experience_data:
            Experience.objects.create(developer=developer, **exp)
        return developer

class DeveloperViewSet(viewsets.ModelViewSet):
    queryset = Developer.objects.all()
    serializer_class = DeveloperSerializer
    