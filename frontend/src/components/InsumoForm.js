import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const InsumoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    preco_unidade: '',
    quantidade: '',
    dias_em_estoque: '',
    data_compra: '',
    validade: '',
    observacao: '',
  });

  const fetchInsumo = useCallback(async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/insumos/${id}/`);
      setFormData(response.data);
    } catch (error) {
      console.error('Erro ao buscar insumo:', error);
    }
  }, [id]); // Adicione 'id' como dependência

  useEffect(() => {
    if (id) {
      fetchInsumo();
    }
  }, [fetchInsumo, id]); // Adicione 'fetchInsumo' e 'id' como dependências

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://127.0.0.1:8000/api/insumos/${id}/`, formData);
      } else {
        await axios.post('http://127.0.0.1:8000/api/insumos/', formData);
      }
      navigate('/');
    } catch (error) {
      console.error('Erro ao salvar insumo:', error);
    }
  };

  return (
    <div>
      <h1>{id ? 'Editar Insumo' : 'Adicionar Insumo'}</h1>
      <form onSubmit={handleSubmit}>
        <input name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" required />
        <input name="preco_unidade" value={formData.preco_unidade} onChange={handleChange} placeholder="Preço por Unidade" required />
        <input name="quantidade" value={formData.quantidade} onChange={handleChange} placeholder="Quantidade" required />
        <input name="dias_em_estoque" value={formData.dias_em_estoque} onChange={handleChange} placeholder="Dias em Estoque" />
        <input name="data_compra" type="date" value={formData.data_compra} onChange={handleChange} placeholder="Data da Compra" />
        <input name="validade" type="date" value={formData.validade} onChange={handleChange} placeholder="Validade" />
        <textarea name="observacao" value={formData.observacao} onChange={handleChange} placeholder="Observação" />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default InsumoForm;