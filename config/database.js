const Sequelize = require('sequelize');
let sequelize;
sequelize = new Sequelize('project_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
