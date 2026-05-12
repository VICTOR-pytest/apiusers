# User API 🚀

API RESTful para gerenciamento de usuários com Express.js e MongoDB.

## 📋 Pré-requisitos

- Node.js 14+
- MongoDB rodando localmente ou URI de conexão
- npm ou yarn

## ⚙️ Instalação

1. **Clone ou baixe o projeto**
```bash
cd userapi
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/userapi
NODE_ENV=development
```

## 🚀 Iniciando o servidor

```bash
npm start
# ou
node index.js
```

Quando inicia, a API automaticamente cria usuários de teste:
- 📧 **teste@email.com** | Senha: **123456**
- 📧 **joao@email.com** | Senha: **123456**
- 📧 **maria@email.com** | Senha: **123456**

## 📡 Endpoints da API

### 1. **Listar todos os usuários**
```http
GET /api/users
```

**Resposta (200):**
```json
{
  "status": "success",
  "message": "Usuários listados com sucesso",
  "total": 3,
  "data": [
    {
      "id": "507f1f77bcf86cd799439011",
      "name": "Usuário Teste",
      "email": "teste@email.com",
      "createdAt": "2026-05-11T10:30:00Z"
    }
  ]
}
```

### 2. **Criar novo usuário**
```http
POST /api/users
Content-Type: application/json

{
  "name": "João da Silva",
  "email": "joao@example.com",
  "password": "senha123"
}
```

**Resposta (201):**
```json
{
  "status": "success",
  "message": "Usuário criado com sucesso",
  "data": {
    "id": "507f1f77bcf86cd799439012",
    "name": "João da Silva",
    "email": "joao@example.com",
    "createdAt": "2026-05-11T10:35:00Z"
  }
}
```

**Erros:**
- 400: Campos obrigatórios faltando
- 409: Email já cadastrado

### 3. **Atualizar usuário**
```http
PUT /api/users/:id
Content-Type: application/json

{
  "name": "João Silva Atualizado",
  "email": "joao.novo@example.com",
  "password": "novasenha123"
}
```

**Resposta (200):**
```json
{
  "status": "success",
  "message": "Usuário atualizado com sucesso",
  "data": {
    "id": "507f1f77bcf86cd799439012",
    "name": "João Silva Atualizado",
    "email": "joao.novo@example.com",
    "createdAt": "2026-05-11T10:35:00Z"
  }
}
```

### 4. **Deletar usuário**
```http
DELETE /api/users/:id
```

**Resposta (200):**
```json
{
  "status": "success",
  "message": "Usuário deletado com sucesso"
}
```

## 🧹 Limpar usuários de teste

Se quiser remover os usuários de teste:

```bash
node scripts/cleanSeed.js
```

## 📁 Estrutura do Projeto

```
userapi/
├── src/
│   ├── config/
│   │   └── db.js                 # Configuração de BD
│   ├── controllers/
│   │   └── userController.js     # Lógica dos endpoints
│   ├── middleware/
│   │   └── errorHandler.js       # Tratamento de erros
│   ├── models/
│   │   └── usermodel.js          # Schema do usuário
│   ├── route/
│   │   └── user.js               # Rotas de usuário
│   ├── seeders/
│   │   └── userSeeder.js         # Popula BD com dados de teste
│   └── views/
│       ├── userView.js           # Serializers de usuário
│       ├── errorView.js          # Serializers de erro
│       └── index.js              # Exporta todas as views
├── scripts/
│   └── cleanSeed.js              # Script para limpar dados de teste
├── index.js                      # Entry point da aplicação
├── package.json
├── .env.example
└── README.md
```

## 🔒 Segurança

- Senhas são hasheadas com **bcryptjs**
- Senhas nunca são retornadas nas respostas (exceto na criação)
- CORS habilitado
- Validação de entrada em todos os endpoints
- Tratamento centralizado de erros

## 🐛 Troubleshooting

**Erro: "MongoDB conectado" mas não cria usuários?**
- Verifique se o MongoDB está rodando
- Confirme a `MONGODB_URI` no `.env`

**Erro: "Email já cadastrado"?**
- Use um email diferente ou execute `node scripts/cleanSeed.js`

**Porta já em uso?**
- Mude a `PORT` no `.env` para outra (ex: 3001)

## 📝 Licença

ISC

---

**Desenvolvido com ❤️ usando Node.js, Express e MongoDB**
