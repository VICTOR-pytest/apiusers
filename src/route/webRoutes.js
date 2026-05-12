// src/route/webRoutes.js
const express = require("express");
const router = express.Router();
const webController = require("../controllers/webController");

// Home
router.get("/", webController.home);

// Usuários
router.get("/users", webController.listUsers);

// Criar
router.get("/users/create", webController.createForm);
router.post("/users", webController.createUser);

// Editar
router.get("/users/edit/:id", webController.editForm);
router.post("/users/:id", webController.updateUser);

// Deletar
router.post("/users/delete/:id", webController.deleteUser);

module.exports = router;
