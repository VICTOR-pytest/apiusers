const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const userRoutes = require("./src/routes/webRoutes");
const errorHandler = require("./src/middleware/errorHandler");
const seedUsers = require("./src/seeders/userSeeder");

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar EJS como view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Conectar ao MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/userapi")
  .then(async () => {
    console.log("✅ MongoDB conectado com sucesso");
    // Seed de usuários de teste
    await seedUsers();
  })
  .catch((err) => console.log("❌ Erro ao conectar MongoDB:", err));

// Rotas Web (HTML)
app.use("/", webRoutes);

// Rotas API (JSON)
app.use("/api/users", userRoutes);

// Middleware de tratamento de erros (deve estar por último)
app.use(errorHandler);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`🌐 Interface Web: http://localhost:${PORT}/users`);
  console.log(`📡 API JSON: http://localhost:${PORT}/api/users`);
});