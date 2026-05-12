// Middleware de tratamento de erros global
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      status: "error",
      message: "Erro de validação",
      errors: Object.values(err.errors).map(e => e.message)
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      status: "error",
      message: "ID inválido"
    });
  }

  if (err.code === 11000) {
    return res.status(409).json({
      status: "error",
      message: "Recurso duplicado. Email já existe."
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Erro interno do servidor",
    error: process.env.NODE_ENV === "development" ? err.message : undefined
  });
};

module.exports = errorHandler;
