// Serializar um usuário único
const renderUser = (user) => {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt || new Date()
  };
};

// Serializar múltiplos usuários
const renderUsers = (users) => {
  return users.map(user => renderUser(user));
};

// Resposta de sucesso para criar usuário
const renderCreateUser = (user) => {
  return {
    status: "success",
    message: "Usuário criado com sucesso",
    data: renderUser(user)
  };
};

// Resposta de sucesso para listar usuários
const renderGetUsers = (users, total) => {
  return {
    status: "success",
    message: "Usuários listados com sucesso",
    total: total,
    data: renderUsers(users)
  };
};

// Resposta de sucesso para atualizar usuário
const renderUpdateUser = (user) => {
  return {
    status: "success",
    message: "Usuário atualizado com sucesso",
    data: renderUser(user)
  };
};

// Resposta de sucesso para deletar usuário
const renderDeleteUser = () => {
  return {
    status: "success",
    message: "Usuário deletado com sucesso"
  };
};

// Resposta de usuário não encontrado
const renderUserNotFound = () => {
  return {
    status: "error",
    message: "Usuário não encontrado"
  };
};

module.exports = {
  renderUser,
  renderUsers,
  renderCreateUser,
  renderGetUsers,
  renderUpdateUser,
  renderDeleteUser,
  renderUserNotFound
};
