# Generated by Django 5.1.7 on 2025-03-15 20:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Insumo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100, verbose_name='Nome do Insumo')),
                ('preco_unidade', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Preço por Unidade')),
                ('quantidade', models.IntegerField(verbose_name='Quantidade em Estoque')),
                ('dias_em_estoque', models.IntegerField(blank=True, null=True, verbose_name='Dias em Estoque')),
                ('data_compra', models.DateField(blank=True, null=True, verbose_name='Data da Compra')),
                ('validade', models.DateField(blank=True, null=True, verbose_name='Data de Validade')),
                ('observacao', models.TextField(blank=True, null=True, verbose_name='Observação')),
            ],
            options={
                'verbose_name': 'Insumo',
                'verbose_name_plural': 'Insumos',
            },
        ),
    ]
