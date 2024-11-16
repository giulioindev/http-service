from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from rest_framework.routers import DefaultRouter

from core.v1.request_detail_view_set import RequestDetailViewSet

router = DefaultRouter()
router.register("", RequestDetailViewSet, basename="request-detail")
urlpatterns = [
    path("request-details/", include(router.urls)),
    path("docs/", SpectacularSwaggerView.as_view(url_name="schema-v1", authentication_classes=[]), name="swagger-ui"),
    path("schema/", SpectacularAPIView.as_view(api_version="v1", authentication_classes=[]), name="schema-v1"),
]
