from frontend.views import index
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from rest_framework.documentation import include_docs_urls

admin.autodiscover()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('admin/docs/', include('django.contrib.admindocs.urls')),
    path('auth/', include('rest_framework.urls')),
    path('api/', include('api.urls')),
    path('docs/api/', include_docs_urls(title="Gram Power Technical Test")),
    # path('accounts/', include('accounts.urls')),
    path('accounts/', include('dj_rest_auth.urls')),
    path('accounts/registration/', include('dj_rest_auth.registration.urls'))
]

if ('drf_yasg' in settings.INSTALLED_APPS):
    from drf_yasg.views import get_schema_view
    from drf_yasg import openapi
    from rest_framework import permissions
    schema_view = get_schema_view(
        openapi.Info(
            title="Gram Power Technical Test",
            default_version='test',
            description="""
This is a Development Documentation [Gram Power Technical Test](/).

The `swagger-ui` view can be found [here](/docs/swagger).
The `basic-ui` view can be found [here](/docs/api/).
The `redoc-ui` view can be found [here](/docs/redoc/).

You can log in using the pre-existing `username` user with password `UsernamePassword`.""",  # noqa
contact=openapi.Contact(email="shubhammr21@gmail.com"),
        ),
        public=True,
        permission_classes=(permissions.AllowAny,),
    )
    urlpatterns += [
        path('docs/swagger/', schema_view.with_ui(
            'swagger',
            cache_timeout=0
        ), name='schema-swagger-ui'),
        path('docs/redoc/', schema_view.with_ui(
            'redoc',
            cache_timeout=0
        ), name='schema-redoc'),
    ]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [path('__debug__/', include(debug_toolbar.urls)), ]
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    # urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


if ('anymail' in settings.INSTALLED_APPS):
    urlpatterns += [
        path('anymail/', include('anymail.urls')),
    ]

# Frontend (React)
# urlpatterns += [re_path(r'(?P<path>.*)', index)]  # for the empty url
