from django.http import HttpResponse
from rest_framework.response import Response
from django.shortcuts import render, redirect
from .forms import CityForm, ReviewForm
from rest_framework import generics
from .models import City, Review
from .serializers import ReviewSerializers, CitySerializers
  
# Create your views here.

class ReviewListAPIView(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializers

    def create(self, request, *args, **kwargs):
        review = ReviewSerializers(data=request.data)
        review.is_valid()
        cityName = request.data.get("city_name")
        image = request.data.get("review_img")     
        if not image:
            try:
                cityImg = City.objects.get(city_name    = cityName).city_img
                # if image is not provided by user  then we create a Review object save  imge from city table and save it
                obj = Review()
                obj.city_name = request.data.get    ('city_name')
                obj.traveller_name = request.data.get   ('traveller_name')
                obj.traveller_review =  request.data.get('traveller_review')
                obj.review_img = cityImg
                obj.save()
                return Response("Review ubdated successfully")
            # if user entered a city which is not in database then we will save remaining details with img == null 
            except:
                obj = Review()
                obj.city_name = request.data.get    ('city_name')
                obj.traveller_name = request.data.get   ('traveller_name')
                obj.traveller_review =  request.data.get('traveller_review')
                obj.review_img = ""
                obj.save()
                return redirect('home')
            
        elif review.is_valid():
            review.save()
        return redirect('home')


class ReviewDetailAPIView(generics.RetrieveDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializers

class CityListCreateAPIView(generics.ListCreateAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializers
