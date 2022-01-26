const dbconnection = require('../config/connection');
const Sequelize = require('sequelize');
const db = {};

let sequelize;
  sequelize = new Sequelize(dbconnection.DB_NAME, dbconnection.DB_USER, dbconnection.DB_PASSWORD, {
    host: dbconnection.DB_HOST,
    dialect: dbconnection.DB_DIALECT
  });



db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./user")(sequelize, Sequelize);
db.post = require("./post")(sequelize, Sequelize);
db.comments = require("./comments")(sequelize, Sequelize);

//ASSOCIATIONS

// db.post.hasMany(db.comments);
// db.post.belongsTo(db.user);
// db.user.hasMany(db.post);

// db.comments.belongsTo(db.post);
// db.comments.belongsTo(db.user);


module.exports = db;
