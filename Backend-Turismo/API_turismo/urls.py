from pydoc import visiblename
from django.urls import path
from .views import TurismoView
from API_turismo import views


urlpatterns = [
    path ('lugares/int:pk>',views.TurismoView, name="lugares")
    
]
