from django.urls import include, path

urlpatterns = [path("v1/", include(("core.v1.urls", "core"), namespace="v1"))]
