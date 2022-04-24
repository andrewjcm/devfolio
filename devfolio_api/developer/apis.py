from rest_framework import viewsets, serializers, permissions

from developer.models import Developer, Education, Experince

class DeveloperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Developer
        fields = '__all__'

    def create(self, validated_data):
        education_data = validated_data.pop('education')
        experince_data = validated_data.pop('experince')
        developer = Developer.objects.create(**validated_data)
        for edu in education_data:
            Education.objects.create(developer=developer, **edu)
        for exp in experince_data:
            Experince.objects.create(developer=developer, **exp)
        return developer

class DeveloperViewSet(viewsets.ModelViewSet):
    queryset = Developer.objects.all()
    serializer_class = DeveloperSerializer
