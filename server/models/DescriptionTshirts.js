const Sequelize = require('sequelize');
const dbUrl = 'postgres://localhost:5432/ecommerce';
const sequelize = new Sequelize(dbUrl);

const DescriptionTshirts = sequelize.define('descriptionTshirts', {
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
	item: {
		//foreign key how do you do that lol
    type: Sequelize.STRING, 
    autoIncrement: true,
		validate: { notEmpty: true },
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  height: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  width: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  sizeID: {
    // foreign key from sizeID table 
		type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },

}
});

module.exports = DescriptionTshirts;


