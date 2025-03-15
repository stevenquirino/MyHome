from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from insumos.views import InsumoViewSet  # Importação absoluta

# Configuração do roteador do DRF
router = DefaultRouter()
router.register(r'insumos', InsumoViewSet)  # Registra o ViewSet para o modelo Insumo

urlpatterns = [
    path('admin/', admin.site.urls),  # Painel de administração do Django
    path('api/', include(router.urls)),  # Inclui as URLs da API
]