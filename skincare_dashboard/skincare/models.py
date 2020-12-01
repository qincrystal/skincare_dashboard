from django.db import models

# Create your models here.
class Skincare(models.Model):
    name = models.CharField(max_length=100)
    skincareType = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    rating = models.IntegerField()

