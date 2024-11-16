from rest_framework import serializers


class RequestDataSerializer(serializers.Serializer):
    """Serializer class for RequestDetail data."""

    url = serializers.CharField()
    response = serializers.DictField()
    request = serializers.DictField()
    date = serializers.CharField()
