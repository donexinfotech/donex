from django.contrib import admin
from django.urls import path
from backend.views import *

urlpatterns = [
    path('contact-us/', DetailsView.as_view())
]
