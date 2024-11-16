from rest_framework import serializers

from core.models.request_detail import RequestDetail
from core.v1.request_data_serializer import RequestDataSerializer


class RequestDetailSerializer(serializers.ModelSerializer[RequestDetail]):
    """Serializer class for RequestDetail model."""

    data = RequestDataSerializer()

    class Meta:
        model = RequestDetail
        fields = ["id", "status", "errors", "data", "created_at", "updated_at"]
        read_only_fields = ["id", "created_at", "updated_at"]
