from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password', 'discord', 'steam', 'riotid', 'about', 'profile_picture']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            discord=validated_data.get('discord', ''),
            steam=validated_data.get('steam', ''),
            riotid=validated_data.get('riotid', ''),
            about=validated_data.get('about', ''),

        )
        user.set_password(validated_data['password'])
        user.save()
        return user
