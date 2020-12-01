from skincare.models import Skincare
from rest_framework import viewsets, permissions
from .serializers import SkincareSerializer

class SkincareViewSet(viewsets.ModelViewSet):
    queryset = Skincare.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SkincareSerializer