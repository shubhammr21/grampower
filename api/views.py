from api.filters import *
from api.models import *
from api.utils import SampleData
from api.serializers import *
from api.paginations import StandardResultsPagination
from rest_framework import (
    generics,
    status,
)
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.parsers import (
    FormParser, JSONParser,
    MultiPartParser,
    FileUploadParser
)
from rest_framework.permissions import (
    AllowAny, IsAuthenticated,
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

    def post(self, request):
        print(request.data)
        print(request.user)
        return Response(data={"hello": "world"}, status=status.HTTP_200_OK)


# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def store_create(request):
#     print(request.data)
#     print(request.POST)
#     serializer = StoreCreateSerializer(data=request.data)

#     if serializer.is_valid():
#         serializer.save(owner=request.user)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(True, status=status.HTTP_400_BAD_REQUEST)


class StoreCreateView(generics.CreateAPIView):
    """
    Create a store from here
    """
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication,)
    serializer_class = StoreCreateSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(owner=request.user)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


# class StoreCreateView(APIView):
#     """
#     Create a store from here
#     """
#     # parser_classes = [MultiPartParser, FormParser]
#     permission_classes = [IsAuthenticated]

#     def post(self, request):
#         serializer = StoreCreateSerializer(data=request.data)

#         if serializer.is_valid():
#             serializer.save(owner=request.user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StoreListView(generics.ListAPIView):
    """
    Store list view and paginated by 10 items.
    """
    queryset = Store.objects.all() \
        .select_related('owner')

    serializer_class = StoreListSerializer
    pagination_class = StandardResultsPagination
    filter_backends = (SearchFilter, OrderingFilter)
    ordering = ('-timestamp',)
    search_fields = ('name', 'owner__first_name',
                     'owner__last_name', 'owner__username')


class StoreDetailView(generics.RetrieveAPIView):
    """
    Set to slug field to see detail of Store.
    """
    lookup_field = 'id'
    queryset = Store.objects.all() \
        .select_related('owner')
    serializer_class = StoreDetailSerializer


class SampleDataLoadView(APIView):
    permission_classes = [IsAdminUser]

    def post(self, request):
        sample = SampleData()
        sample.insert_user(20)
        sample.insert_store(200)
        sample.insert_products(2000)
        sample.insert_photo(3000)
        sample.insert_store_hour()
        return Response({"success": "Data Created, you can browse know"}, status=status.HTTP_201_CREATED)
