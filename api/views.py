from api.serializers import *
from api.models import *
from api.filters import *
from api.paginations import StandardResultsPagination
from django.shortcuts import render, get_object_or_404
from django.db.models.query import prefetch_related_objects
from django.db.models import Prefetch
from django_filters.rest_framework import DjangoFilterBackend
from django.http import HttpResponse, JsonResponse
from rest_framework import (
    generics,
    mixins,
    status,
    viewsets
)
from rest_framework.authentication import (
    SessionAuthentication,
    BasicAuthentication,
    TokenAuthentication
)
from rest_framework.decorators import api_view, permission_classes
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.parsers import JSONParser
from rest_framework.permissions import (
    AllowAny, IsAuthenticated,
    BasePermission,
    IsAuthenticatedOrReadOnly,
    IsAdminUser
)
from rest_framework.response import Response
from rest_framework.views import APIView
# from django.views.decorators.csrf import csrf_exempt
"""
# TODO
"""


class HelloWorldView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        print(request.data)
        print(request.user)
        return Response(data={"hello": "world"}, status=status.HTTP_200_OK)
