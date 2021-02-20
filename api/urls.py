from django.conf import settings
from django.urls import path, include
from .views import *
# from rest_framework.routers import DefaultRouter, SimpleRouter

# router = SimpleRouter() if settings.DEBUG else DefaultRouter()
# router.register('article', ArticleViewSet, basename='article')


urlpatterns = [
    path('hello/', HelloWorldView.as_view()),
]
