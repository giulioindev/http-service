from django.urls import path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns = [
    path("docs/", SpectacularSwaggerView.as_view(url_name="schema-v1", authentication_classes=[]), name="swagger-ui"),
    path("schema/", SpectacularAPIView.as_view(api_version="v1", authentication_classes=[]), name="schema-v1"),
]
