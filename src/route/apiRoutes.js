// src/route/apiRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/usermodel");

// GET todos os usuários
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET usuário por ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST criar usuário
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validação
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Nome, email e senha são obrigatórios" });
    }

    // Verificar se email já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email já cadastrado" });
    }

    // Criar usuário
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({
      message: "Usuário criado com sucesso",
      user: { ...user.toObject(), password: undefined },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT atualizar usuário
router.put("/:id", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const updateData = {};

    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (password) updateData.password = password;

    const user = await User.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    }).select("-password");

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.json({
      message: "Usuário atualizado com sucesso",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE usuário
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.json({
      message: "Usuário deletado com sucesso",
      user: { ...user.toObject(), password: undefined },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
