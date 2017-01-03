const Sequelize = require('sequelize');
const dbUrl = 'postgres://localhost:5432/ecommerce';
const sequelize = new Sequelize(dbUrl);

const Categories = sequelize.define('categories', {
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
	name: {
		//foreign key how do you do that lol
    type: Sequelize.STRING, 
    autoIncrement: true,
		validate: { notEmpty: true },
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { notEmpty: true },
  },
}
});

module.exports = Categories;

