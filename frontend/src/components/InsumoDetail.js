import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const InsumoDetail = () => {
  const { id } = useParams();
  const [insumo, setInsumo] = useState(null);

  const fetchInsumo = useCallback(async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/insumos/${id}/`);
      setInsumo(response.data);
    } catch (error) {
      console.error('Erro ao buscar insumo:', error);
    }
  }, [id]); // Adicione 'id' como dependência

  useEffect(() => {
    fetchInsumo();
  }, [fetchInsumo]); // Adicione 'fetchInsumo' como dependência

  if (!insumo) return <div>Carregando...</div>;

  return (
    <div>
      <h1>{insumo.nome}</h1>
      <p>Preço por Unidade: R$ {insumo.preco_unidade}</p>
      <p>Quantidade: {insumo.quantidade}</p>
      <p>Dias em Estoque: {insumo.dias_em_estoque}</p>
      <p>Data da Compra: {insumo.data_compra}</p>
      <p>Validade: {insumo.validade}</p>
      <p>Observação: {insumo.observacao}</p>
      <Link to={`/edit/${insumo.id}`}>Editar</Link>
    </div>
  );
};

export default InsumoDetail;