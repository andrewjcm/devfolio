from django.contrib import admin
from projects.models import Project, ProgrammingLanguage, ProjectImage

admin.site.register(Project)
admin.site.register(ProgrammingLanguage)
admin.site.register(ProjectImage)