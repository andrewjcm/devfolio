from django.urls import include, path
from rest_framework import routers

from projects.apis import ProjectViewSet


router = routers.DefaultRouter()
router.register(r'api/project', ProjectViewSet)


urlpatterns = [
    path('', include(router.urls))
]
