from django.contrib import admin
from . models import Review, City

# Register your models here.
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'city_name', 'traveller_name', 'traveller_review', 'review_img')

class CityAdmin(admin.ModelAdmin):
    list_display = ('id', 'city_name', 'city_img')

admin.site.register(Review, ReviewAdmin)
admin.site.register(City, CityAdmin)