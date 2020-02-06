from django.db import models

# Create your models here.
class City(models.Model):
    city_name = models.CharField(max_length=255)
    city_img = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.city_name

class Review(models.Model):
    city_name = models.CharField(max_length=255)
    traveller_name = models.CharField(max_length=255)
    traveller_review = models.CharField(max_length=100000)
    review_img = models.ImageField(upload_to='images/', null=True)

    def __str__(self):
        return self.traveller_name

    