from django.urls import path
from .views import create_user, UserListView, CurrentUserView
from . import views


urlpatterns = [
    path('create_user/', create_user, name='create_user'),
    path('users/', UserListView.as_view(), name='user-list'),
    path('api/current_user_logged_in/', CurrentUserView.as_view(), name='current-user'),
    path('api/users/<int:user_id>/', views.update_user, name='update_user'),
]
