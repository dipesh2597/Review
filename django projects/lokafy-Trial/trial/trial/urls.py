from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('review.urls')),
    path('', include('frontend.urls'), name='home'),
    path('admin/', admin.site.urls),
]