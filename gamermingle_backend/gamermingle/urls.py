from django.urls import path
from .views import create_user, UserListView, current_user, MessageView
from .views import MessageListCreateView


urlpatterns = [
    path('create_user/', create_user, name='create_user'),
    path('users/', UserListView.as_view(), name='user-list'),
    path('api/messages/<int:receiver_id>/', MessageView.as_view()),
    path('current_user/', current_user, name='current-user'),  
    path('messages/<str:receiver_username>/', MessageListCreateView.as_view(), name='message-list-create'),
]