// src/controllers/userController.js
const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");
const views = require("../views");

// CREATE - Criar novo usuário
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validação
    if (!name || !email || !password) {
      return res.status(400).json(
        views.renderValidationError("Nome, email e senha são obrigatórios")
      );
    }

    // Verificar se email já existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json(
        views.renderConflictError("Email já cadastrado")
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    return res.status(201).json(views.renderCreateUser(user));
  } catch (error) {
    return res.status(500).json(
      views.renderServerError(error.message)
    );
  }
};

// READ ALL - Listar todos os usuários
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    const total = await User.countDocuments();
    
    return res.status(200).json(views.renderGetUsers(users, total));
  } catch (error) {
    return res.status(500).json(
      views.renderServerError(error.message)
    );
  }
};

// UPDATE - Atualizar usuário
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json(views.renderUserNotFound());
    }

    // Atualizar campos
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = await bcrypt.hash(password, 10);

    await user.save();

    return res.status(200).json(views.renderUpdateUser(user));
  } catch (error) {
    return res.status(500).json(
      views.renderServerError(error.message)
    );
  }
};

// DELETE - Deletar usuário
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json(views.renderUserNotFound());
    }

    return res.status(200).json(views.renderDeleteUser());
  } catch (error) {
    return res.status(500).json(
      views.renderServerError(error.message)
    );
  }
};
