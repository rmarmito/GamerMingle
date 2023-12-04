from django.urls import path
from .views import create_user, UserListView

urlpatterns = [
    path('create_user/', create_user, name='create_user'),
    path('users/', UserListView.as_view(), name='user-list'),
]

