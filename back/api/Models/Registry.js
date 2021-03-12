const S = require("sequelize");
const db = require("../db/db");

class Registry extends S.Model {}

Registry.init(
  {
    amount: {
      type: S.DOUBLE,
      allowNull: false,
    },
    date: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.TEXT,
      allowNull: false,
    },
    type: {
      type: S.STRING,
      allowNull: false,

      values: ["Ingress", "Egress"],
    },
  },
  { sequelize: db, modelName: "Registry" }
);

module.exports = Registry;
