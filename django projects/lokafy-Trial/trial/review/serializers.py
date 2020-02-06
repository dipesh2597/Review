from rest_framework import serializers
from rest_framework.response import Response
from .models import Review, City

#serializer model
# class ReviewCreateSerializer(serializers.Serializer):
#     city_name = serializers.CharField(max_length=255)
#     traveller_name = serializers.CharField(max_length=255)
#     traveller_review = serializers.CharField(max_length=100000)
#     review_img = serializers.ImageField(max_length=None, use_url=True,)

    # def create(self, request, *args, **kwargs):
    #     print("12")
    #     review = ReviewCreateSerializer(data=request.data)
    #     cityName = request.data.get("city_name")
    #     image = request.data.get("review_img")
    #     print(cityName)
    #     print(image)
    #     cityImg = City.objects.get(city_name = cityName).city_img
    #     print(cityImg)
    #     if not image:
    #         print("no image")
    #         review.city_name = cityImg
    #         print("image set")
    #     if review.is_valid(raise_exception=True):
    #         review.save()
    #     return Response(review.data, status=status.HTTP_201_CREATED)

    

class ReviewSerializers(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'city_name', 'traveller_name', 'traveller_review', 'review_img',]

class CitySerializers(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ['id', 'city_name', 'city_img',]