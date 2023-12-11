from django.urls import path
from .views import create_user, UserListView, CurrentUserView, current_user, MessageView
from . import views


urlpatterns = [
    path('create_user/', create_user, name='create_user'),
    path('users/', UserListView.as_view(), name='user-list'),
    path('current_user_logged_in/', CurrentUserView.as_view(), name='current-user-logged-in'),
    path('api/users/<int:user_id>/', views.update_user, name='update_user'),
    path('api/messages/<int:receiver_id>/', MessageView.as_view()),
    path('current_user/', current_user, name='current-user'),  
]
