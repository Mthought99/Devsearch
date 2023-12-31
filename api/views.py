from django.http import JsonResponse
from rest_framework.decorators import api_view

def getRoutes(request):

    routes = [
        {'GET':'/api/projects'},
        {'GET':'/api/projects/id'},
        {'POST':'/api/projects/id/vote'},
        {'POST':'/api/users/token'},
        {'POST':'/api/users/token/refresh'},
    ]

    return JsonResponse(routes, safe=False)