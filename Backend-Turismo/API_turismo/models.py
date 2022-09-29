from django.db import models
from django.db.models import Model

class Turismo(models.Model):
    id = models.BigAutoField(primary_key=True)
    title= models.CharField(max_length=100)
    date= models.DateTimeField()
    location= models.CharField(max_length=200)
    comment= models.CharField(max_length=500)
    budget= models.CharField(max_length=100)



