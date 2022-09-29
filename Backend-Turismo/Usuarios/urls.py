from django.urls import path, include
from .views import Registro
from django.contrib import admin



urlpatterns = [
    path('registro/',Registro.as_view(), name='registro'),
    path('registro/<int:id>',Registro.as_view(), name='registro_process')
]