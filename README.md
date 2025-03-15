# MyHome

MyHome é uma aplicação web para gerenciar insumos domésticos, controle de rotina e de tasks . 

## Tecnologias Utilizadas

- **Frontend**: React (com Material-UI)
- **Backend**: Django (com Django REST Framework)
- **Banco de Dados**: SQLite (padrão do Django)

## Funcionalidades

- **Listagem de Insumos**: Visualize todos os insumos em uma tabela interativa.
- **Adicionar Insumo**: Adicione novos insumos através de um modal.
- **Editar Insumo**: Atualize as informações dos insumos existentes.
- **Excluir Insumo**: Remova insumos que não são mais necessários.
- **Interface Moderna**: Design responsivo e intuitivo com Material-UI.

## Como Executar o Projeto

### Pré-requisitos

- **Node.js**: Para executar o frontend React.
- **Python**: Para executar o backend Django.
- **Git**: Para clonar o repositório.

### Passo 1: Clonar o Repositório

Clone o repositório do projeto:

```
git clone https://github.com/stevenquirino/MyHome.git
cd MyHome
```


### Passo 2: Configurar o Backend (Django)

- Instale as dependências do Django:
```
pip install -r requirements.txt
```
- Execute as migrações para configurar o banco de dados:
```
python manage.py migrate
```
- Crie um superusuário para acessar o painel de administração:
```
python manage.py createsuperuser
```
- Inicie o servidor Django:
```
python manage.py runserver
```
O backend estará disponível em http://localhost:8000/.

### Passo 3: Configurar o Frontend (React)
Navegue até a pasta do frontend:
```
cd frontend
```

Instale as dependências do React:
```
npm install
```

Inicie o servidor React:
```
npm start
```
O frontend estará disponível em http://localhost:3000/.

## Estrutura do Projeto


- **MyHome/**: Configurações do projeto Django.
- **backend/**: Aplicação Django para com Models, Views e Controllers.
- **frontend/**: Contém o frontend React.
  - **src/**: Código-fonte do React.
    - **components/**: Componentes React (ex: InsumoList.js).
    - **App.js**: Componente principal da aplicação.
    - **index.js**: Ponto de entrada da aplicação.

## Contato
- **GitHub**: [stevenquirino](https://github.com/stevenquirino)
- **Linkedin**: [stevenquirino](https://www.linkedin.com/in/stevenquirino)
- **Email**: quirino95@gmail.com