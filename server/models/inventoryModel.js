const Sequelize = require('sequelize');
const dbUrl = 'postgres://localhost:5432/ecommerce';
const sequelize = new Sequelize(dbUrl);

const Items = sequelize.define('items', {
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
	category: {
		//foreign key how do you do that lol
    type: Sequelize.INTEGER, 
    autoIncrement: true,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { notEmpty: true },
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
	price: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: { notEmpty: true },
	},
});

module.exports = Items;
