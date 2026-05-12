// Centraliza todas as views/serializers da aplicação

const userView = require("./userView");
const errorView = require("./errorView");

module.exports = {
  ...userView,
  ...errorView
};
