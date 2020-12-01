from rest_framework import serializers
from skincare.models import Skincare

class SkincareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skincare
        fields = '__all__'