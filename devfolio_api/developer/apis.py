from rest_framework import viewsets, serializers, permissions

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
    education = EducationSerializer(many=True)
    experience = ExperienceSerializer(many=True)

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

    def update(self, instance, validated_data):
        education_data = validated_data.pop('education')
        experience_data = validated_data.pop('experience')

        instance.user = validated_data.get('user', instance.user)
        instance.city = validated_data.get('city', instance.city)
        instance.state = validated_data.get('state', instance.state)
        instance.country = validated_data.get('country', instance.country)
        instance.save()

        for education in education_data:
            edu = education_data.pop(0)
            edu.school = education.get('school', edu.school)
            edu.degree = education.get('degree', edu.degree)
            edu.field = education.get('field', edu.field)
            edu.end_date = education.get('end_date', edu.end_date)
            edu.save()
        
        for experience in experience_data:
            exp = experience_data.pop(0)
            exp.title = experience.get('title', exp.title)
            exp.company = experience.get('company', exp.company)
            exp.location = experience.get('location', exp.location)
            exp.start_date = experience.get('start_date', exp.start_date)
            exp.end_date = experience.get('end_date', exp.end_date)
            exp.current = experience.get('current', exp.current)
            exp.description = experience.get('description', exp.description)
            exp.save()

        
        return instance

class DeveloperViewSet(viewsets.ModelViewSet):
    queryset = Developer.objects.all()
    serializer_class = DeveloperSerializer
