from rest_framework import viewsets
from insumos.models import Insumo  # Importação do modelo Insumo
from insumos.serializers import InsumoSerializer  # Importação do serializer

class InsumoViewSet(viewsets.ModelViewSet):
    queryset = Insumo.objects.all()
    serializer_class = InsumoSerializer