from rest_framework import mixins, viewsets

from core.models.request_detail import RequestDetail
from core.v1.request_detail_serializer import RequestDetailSerializer


class RequestDetailViewSet(
    viewsets.GenericViewSet, mixins.RetrieveModelMixin, mixins.DestroyModelMixin, mixins.CreateModelMixin
):
    """RequestDetailV view set."""

    queryset = RequestDetail.objects.all()
    serializer_class = RequestDetailSerializer
    lookup_url_kwarg = "id"
