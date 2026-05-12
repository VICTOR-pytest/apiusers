// Erro de validação
const renderValidationError = (message, errors = []) => {
  return {
    status: "error",
    message: message || "Erro de validação",
    errors: errors
  };
};

// Erro de autenticação/autorização
const renderAuthError = (message = "Não autorizado") => {
  return {
    status: "error",
    message: message
  };
};

// Erro de servidor interno
const renderServerError = (message = "Erro interno do servidor") => {
  return {
    status: "error",
    message: message
  };
};

// Erro de conflito (ex: email duplicado)
const renderConflictError = (message = "Recurso em conflito") => {
  return {
    status: "error",
    message: message
  };
};

// Erro genérico
const renderError = (statusCode, message) => {
  return {
    status: "error",
    code: statusCode,
    message: message
  };
};

module.exports = {
  renderValidationError,
  renderAuthError,
  renderServerError,
  renderConflictError,
  renderError
};
