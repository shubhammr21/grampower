from api.serializers import *
from api.models import *
from api.filters import *
from api.paginations import StandardResultsPagination
from django.utils.decorators import method_decorator
from rest_framework import (
    generics,
    mixins,
    status,
    viewsets
)
from rest_framework.authentication import (
    TokenAuthentication
)
from rest_framework.decorators import api_view, permission_classes
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.parsers import (
    FormParser, JSONParser,
    MultiPartParser,
    FileUploadParser
)
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


class StoreCreateView(APIView):
    """
    Create a store from here
    """
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)
    # serializer_class = StoreCreateSerializer

    # def create(self, request, *args, **kwargs):
    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_create(serializer)
    #     headers = self.get_success_headers(serializer.data)
    #     return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def post(self, request):
        serializer = StoreDetailSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StoreListView(generics.ListAPIView):
    """
    Store list view and paginated by 10 items.
    """
    queryset = Store.objects.all() \
        .select_related('owner')

    serializer_class = StoreListSerializer
    pagination_class = StandardResultsPagination
    filter_backends = (SearchFilter,)
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
