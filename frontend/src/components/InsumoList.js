import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { AppBar, Toolbar, Typography, Container, Button, Box, IconButton } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

const InsumoList = () => {
  const [insumos, setInsumos] = useState([]);

  // Busca os insumos da API
  const fetchInsumos = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/insumos/');
      setInsumos(response.data);
    } catch (error) {
      console.error('Erro ao buscar insumos:', error);
    }
  };

  // Exclui um insumo
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/insumos/${id}/`);
      fetchInsumos(); // Atualiza a lista após excluir
    } catch (error) {
      console.error('Erro ao excluir insumo:', error);
    }
  };

  // Colunas do DataGrid
  const columns = [
    { field: 'nome', headerName: 'Nome', width: 200, flex: 1 },
    { field: 'preco_unidade', headerName: 'Preço por Unidade', width: 150, flex: 1 },
    { field: 'quantidade', headerName: 'Quantidade', width: 120, flex: 1 },
    { field: 'dias_em_estoque', headerName: 'Dias em Estoque', width: 150, flex: 1 },
    { field: 'data_compra', headerName: 'Data da Compra', width: 150, flex: 1 },
    { field: 'validade', headerName: 'Validade', width: 150, flex: 1 },
    { field: 'observacao', headerName: 'Observação', width: 250, flex: 1 },
    {
      field: 'actions',
      headerName: 'Ações',
      width: 100,
      renderCell: (params) => (
        <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
          <Delete />
        </IconButton>
      ),
    },
  ];

  // Busca os insumos ao carregar o componente
  useEffect(() => {
    fetchInsumos();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header absoluto no topo */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyHome
          </Typography>
        </Toolbar>
      </AppBar>

      {/* DataGrid com botão "Adicionar Insumo" */}
      <Container maxWidth={false} sx={{ flexGrow: 1, marginTop: 4, padding: 0 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <Button variant="contained" startIcon={<Add />}>
              Adicionar Insumo
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1, width: '100%' }}>
            <DataGrid
              rows={insumos}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              checkboxSelection={false} // Remove a seleção
              components={{
                Toolbar: GridToolbar, // Adiciona a barra de ferramentas do DataGrid
              }}
              sx={{ width: '100%' }} // Garante que o DataGrid ocupe toda a largura
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default InsumoList;