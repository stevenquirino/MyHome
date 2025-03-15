from django.contrib import admin
from .models import Insumo

@admin.register(Insumo)
class InsumoAdmin(admin.ModelAdmin):
    list_display = ('nome', 'preco_unidade', 'quantidade', 'dias_em_estoque', 'data_compra', 'validade')
    search_fields = ('nome',)
    list_filter = ('data_compra', 'validade')