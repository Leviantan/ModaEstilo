from rest_framework import serializers
from .models import Turismo


class TurismoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turismo
        fields = ['id', 'title', 'date', 'location', 'comment', 'budget']
