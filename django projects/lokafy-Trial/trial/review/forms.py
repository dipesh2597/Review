from django import forms 
from . models import City, Review
  
class ReviewForm(forms.ModelForm): 
  
    class Meta: 
        model = Review 
        fields = ['city_name', 'traveller_name', 'traveller_review', 'review_img'] 

class CityForm(forms.ModelForm): 
  
    class Meta: 
        model = City
        fields = ['city_name', 'city_img'] 