from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    discord = models.CharField(max_length=100, blank=True)
    steam = models.CharField(max_length=100, blank=True)
    riotid = models.CharField(max_length=100, blank=True)
    about = models.TextField(blank=True)

    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)

class Message(models.Model):
    sender = models.ForeignKey(CustomUser, related_name='sent_messages', on_delete=models.CASCADE)
    receiver = models.ForeignKey(CustomUser, related_name='received_messages', on_delete=models.CASCADE)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)