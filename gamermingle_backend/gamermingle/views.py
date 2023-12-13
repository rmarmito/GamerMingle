from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import api_view, parser_classes, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework import generics

from rest_framework import serializers
from .serializers import UserSerializer, MessageSerializer
from .models import CustomUser, Message
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q

from django.shortcuts import get_object_or_404
from rest_framework.generics import ListCreateAPIView

@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def create_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserListView(ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

class MessageView(APIView):
    def get(self, request, receiver_id):
        messages = Message.objects.filter(receiver_id=receiver_id)
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)

    def post(self, request, receiver_id):
        receiver = CustomUser.objects.get(id=receiver_id)
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(receiver=receiver, sender=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class MessageListCreateView(ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        sender = self.request.user
        receiver_username = self.kwargs['receiver_username']
        receiver = get_object_or_404(CustomUser, username=receiver_username)
        serializer.save(sender=sender, receiver=receiver)