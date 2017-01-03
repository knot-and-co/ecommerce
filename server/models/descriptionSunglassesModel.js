const Sequelize = require('sequelize');
const dbUrl = 'postgres://localhost:5432/ecommerce';
const sequelize = new Sequelize(dbUrl);

const DescriptionSunglasses = sequelize.define('descriptionSunglasses', {
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
	item: {
		//foreign key how do you do that lol
    type: Sequelize.INTEGER, 
    autoIncrement: true,
		validate: { notEmpty: true },
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  height: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { notEmpty: true },
  },
	width: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: { notEmpty: true },
	},
	lensType: Sequelize.STRING,
	allowNull: false,
	validate: { notEmpty: true },
}
});

module.exports = DescriptionSunglasses;
