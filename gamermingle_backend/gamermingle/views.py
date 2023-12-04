from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import api_view, parser_classes, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView

from .serializers import UserSerializer, MessageSerializer
from .models import CustomUser, Message, models
from rest_framework.permissions import IsAuthenticated


@api_view(['POST']) #repsond to hTTP POST REQUEST
@parser_classes([MultiPartParser, FormParser]) #handle multipar forms/data input
def create_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserListView(ListAPIView):
    queryset = CustomUser.objects.all()  
    serializer_class = UserSerializer


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def message_list_and_create(request, receiver_id):
    if request.method == 'GET':
        messages = Message.objects.filter(
            models.Q(sender=request.user, receiver__id=receiver_id) |
            models.Q(sender__id=receiver_id, receiver=request.user)
        ).order_by('-timestamp')
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(sender=request.user)
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)


