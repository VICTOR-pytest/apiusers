// Comando para limpar usuários de teste:
// node scripts/cleanSeed.js

const mongoose = require("mongoose");
require("dotenv").config();

const User = require("../src/models/usermodel");

const cleanSeed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/userapi");

    await User.deleteMany({
      email: { $in: ["teste@email.com", "joao@email.com", "maria@email.com"] }
    });

    console.log("✅ Usuários de teste removidos!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erro:", error.message);
    process.exit(1);
  }
};

cleanSeed();
