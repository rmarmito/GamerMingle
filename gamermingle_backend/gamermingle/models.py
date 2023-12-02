from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    discord = models.CharField(max_length=100, blank=True)
    steam = models.CharField(max_length=100, blank=True)
    riotid = models.CharField(max_length=100, blank=True)
    about = models.TextField(blank=True)

    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
