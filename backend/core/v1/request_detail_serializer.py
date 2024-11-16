from rest_framework import serializers

from core.models.request_detail import RequestDetail


class RequestDetailSerializer(serializers.ModelSerializer[RequestDetail]):
    """Serializer class for RequestDetail model."""

    class Meta:
        model = RequestDetail
        fields = ["id", "status", "errors", "data", "created_at", "updated_at"]
        read_only_fields = ["id", "created_at", "updated_at"]
