from django.db import models

class Insumo(models.Model):
    nome = models.CharField(max_length=100, verbose_name="Nome do Insumo")
    preco_unidade = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Preço por Unidade")
    quantidade = models.IntegerField(verbose_name="Quantidade em Estoque")
    dias_em_estoque = models.IntegerField(verbose_name="Dias em Estoque", null=True, blank=True)
    data_compra = models.DateField(verbose_name="Data da Compra", null=True, blank=True)
    validade = models.DateField(verbose_name="Data de Validade", null=True, blank=True)
    observacao = models.TextField(verbose_name="Observação", null=True, blank=True)

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name = "Insumo"
        verbose_name_plural = "Insumos"