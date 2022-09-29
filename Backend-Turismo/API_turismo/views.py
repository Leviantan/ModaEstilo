from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.views import View
from django.http import HttpResponse
from rest_framework.decorators import api_view
from API_turismo.models import Turismo
from API_turismo.serializers import TurismoSerializer



@api_view(['GET', 'POST', 'PUT', 'DELETE'])



class TurismoView(APIView):
    def get (self,title,pk):
        if(pk>0):
            obj = Turismo.objects.all(pk=pk).values()
            serializer = TurismoSerializer(obj, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)


    def post (self,request):
        serializer = TurismoSerializer(data=request.data) 
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)     


    def put (self,request,pk):
        try:
            obj = Turismo.objects.get(pk=pk)
        except Turismo.DoesNotExist:
            mensaje = {"data not found"}
            return Response(mensaje, status=status.HTTP_404_NOT_FOUND)
        serializer = TurismoSerializer(obj,data=request.data) 
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)                     


    def delete (self, pk):
        try:
            obj = Turismo.objects.get(pk=pk)
        except Turismo.DoesNotExist:
            mensaje = {"data no found"}
            return Response(mensaje, status=status.HTTP_404_NOT_FOUND)
        obj.delete()
        return Response({"data delete"}, status=status.HTTP_204_NO_CONTENT)        
