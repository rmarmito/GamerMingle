from rest_framework import serializers
from .models import CustomUser, Message

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

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'content', 'sender', 'receiver', 'timestamp']

    def validate_content(self, value):
        if len(value) < 5:
            raise serializers.ValidationError("Content must be at least 5 characters long.")
        return value
