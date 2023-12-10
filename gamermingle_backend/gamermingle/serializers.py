from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth.models import User

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
            profile_picture=validated_data.get('profile_picture', None)  # Handle profile_picture
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'discord', 'steam', 'riotid', 'about', 'profile_picture', 'password']
        extra_kwargs = {
            'password': {'write_only': True, 'required': False},
        }

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            password = validated_data.pop('password')
            instance.set_password(password)

        # Update other fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

