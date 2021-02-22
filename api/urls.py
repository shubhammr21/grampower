from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter, SimpleRouter

router = DefaultRouter()
# router.register('store', StoreCreateView, basename='store')


urlpatterns = [
    path('hello/', HelloWorldView.as_view()),
    path('stores/', StoreListView.as_view()),
    path('store/<id>/', StoreDetailView.as_view()),
    path('stor/create/', StoreCreateView.as_view()),
    path('load_sample_data/', SampleDataLoadView.as_view()),
    # path('create/', include(router.urls)),
    # path('store/create/', store_create)
]
