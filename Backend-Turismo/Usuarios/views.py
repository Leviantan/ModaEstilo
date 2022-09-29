import json
from django.shortcuts import render
from django.http import JsonResponse
#from django.contrib.auth.forms import UserCreationForm
from django.views import View
from .models import Usuario, MyUserManager
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

class Registro(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)


    def get(self, request, id=0):
        if (id>0):
            registro = list(Usuario.objects.filter(id=id).values())
            if len(registro) > 0:
                regist = registro[0]
                datos={'message':"Success", 'registro': regist}
            else:
                datos={'message':"Usuario not found..."} 
            return JsonResponse(datos)    
        else:
            registro = list(Usuario.objects.values())
            if len(registro)>0:
                datos={'message':"Success", 'registro': registro}
            else:
                datos={'message':"registro not found..."} 
            return JsonResponse(datos)


    def post(self, request):
            jd=json.loads(request.body)
            Usuario.objects.create(username=jd['username'], email=jd['email'], password=jd['password'], nombres=jd['nombres'], apellidos=jd['apellidos'], pais=jd['pais'], ciudad=jd['ciudad'],edad=jd['edad'])
            datos={'message':"User created successfully"}
            return JsonResponse(datos)   


    def put(self,request,id):
        jd=json.loads(request.body)
        registro=list(Usuario.objects.filter(id=id).values())
        if len(registro) > 0:
            usuario=Usuario.objects.get(id=id)
            usuario.username=jd['username']
            usuario.email=jd['email']
            usuario.nombres=jd['nombres']
            usuario.apellidos=jd['apellidos']
            usuario.pais=jd['pais']
            usuario.cuidad=jd['ciudad']
            usuario.edad=jd['edad']
            usuario.save()
            datos={'message':"Success"}
        else:
            datos={'message':"registro not found..."}
        return JsonResponse(datos)     


    def delete(self,request, id):
        registro=list(Usuario.objects.filter(id=id).values())
        if len (registro)>0:
            Usuario.objects.filter(id=id).delete()
            datos={'message':"Success"}
        else:
            datos={'message':"registro not found..."}
        return JsonResponse(datos)

