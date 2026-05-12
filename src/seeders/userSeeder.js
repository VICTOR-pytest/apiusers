// src/seeders/userSeeder.js
const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const seedUsers = async () => {
  try {
    // Verificar se já existe usuário
    const userExists = await User.findOne({ email: "teste@email.com" });
    
    if (userExists) {
      console.log("✅ Usuários de teste já existem");
      return;
    }

    // Usuários de teste
    const hashedPassword = await bcrypt.hash("123456", 10);

    const testUsers = [
      {
        name: "João Silva",
        email: "joao@email.com",
        password: hashedPassword
      },
      {
        name: "Maria Santos",
        email: "maria@email.com",
        password: hashedPassword
      },
      {
        name: "Usuário Teste",
        email: "teste@email.com",
        password: hashedPassword
      }
    ];

    await User.insertMany(testUsers);
    console.log("✅ Usuários de teste criados com sucesso!");
    console.log("📧 Email: teste@email.com | Senha: 123456");
  } catch (error) {
    console.error("❌ Erro ao criar usuários de teste:", error.message);
  }
};

module.exports = seedUsers;
