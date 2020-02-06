from django.contrib import admin 
from django.urls import path
from django.conf import settings 
from django.conf.urls.static import static 
from .views import ReviewListAPIView, ReviewDetailAPIView, CityListCreateAPIView

urlpatterns = [ 
    path('api/review/', ReviewListAPIView.as_view()),
    path('api/city/', CityListCreateAPIView.as_view()),
    path('api/review/<int:pk>/', ReviewDetailAPIView.as_view()), 
] 
  
if settings.DEBUG: 
        urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 