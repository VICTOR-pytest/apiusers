// src/controllers/webController.js
const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");

// Home Page
exports.home = (req, res) => {
  res.render("home", { title: "Home" });
};

// Listar usuários (View)
exports.listUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.render("index", { 
      title: "Usuários",
      users,
      message: req.query.message
    });
  } catch (error) {
    res.render("index", { 
      title: "Usuários",
      users: [],
      error: error.message 
    });
  }
};

// Formulário criar usuário
exports.createForm = (req, res) => {
  res.render("create", { 
    title: "Criar Usuário",
    error: req.query.error 
  });
};

// Criar usuário (POST)
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validação
    if (!name || !email || !password) {
      return res.render("create", {
        title: "Criar Usuário",
        error: "Nome, email e senha são obrigatórios"
      });
    }

    // Verificar se email já existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.render("create", {
        title: "Criar Usuário",
        error: "Email já cadastrado"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.redirect("/users?message=Usuário criado com sucesso!");
  } catch (error) {
    res.render("create", {
      title: "Criar Usuário",
      error: error.message
    });
  }
};

// Formulário editar usuário
exports.editForm = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.render("edit", {
        title: "Editar Usuário",
        user: null,
        error: "Usuário não encontrado"
      });
    }

    res.render("edit", {
      title: "Editar Usuário",
      user,
      error: req.query.error,
      success: req.query.success
    });
  } catch (error) {
    res.render("edit", {
      title: "Editar Usuário",
      user: null,
      error: error.message
    });
  }
};

// Atualizar usuário (POST)
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res.render("edit", {
        title: "Editar Usuário",
        user: null,
        error: "Usuário não encontrado"
      });
    }

    // Atualizar campos
    if (name) user.name = name;
    if (email) user.email = email;
    if (password && password.trim() !== "") {
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save();

    res.redirect(`/users/edit/${id}?success=Usuário atualizado com sucesso!`);
  } catch (error) {
    res.redirect(`/users/edit/${req.params.id}?error=${encodeURIComponent(error.message)}`);
  }
};

// Deletar usuário
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.redirect("/users?error=Usuário não encontrado");
    }

    res.redirect("/users?message=Usuário deletado com sucesso!");
  } catch (error) {
    res.redirect(`/users?error=${encodeURIComponent(error.message)}`);
  }
};
