from django.urls import path
from . import views
from .views import create_user, UserListView

urlpatterns = [
    path('create_user/', create_user, name='create_user'),
    path('users/', UserListView.as_view(), name='user-list'),
    path('messages/<int:receiver_id>/', views.message_list_and_create, name='message-list-create'),

]

