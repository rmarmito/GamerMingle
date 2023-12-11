from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.conf import settings
from django.conf.urls.static import static
from gamermingle import views  # Import views from your app
from gamermingle.views import MessageListCreateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('gamermingle.urls')),  # Include your app's URLs under the 'api/' prefix
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/messages/', MessageListCreateView.as_view(), name='message-list-create'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
