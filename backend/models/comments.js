module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define(
      "comments",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: 'users',
              key: 'id',
          }
        },
        post_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: 'posts',
              key: 'id', 
          }
        },
        content: {
            type: DataTypes.STRING(1024),
            allowNull:true,
        },
      },
      {
        underscored: true,
      },{
        classMethods: {
            associate: function(models) {
              //associations can be defined here
              models.User.belongsToMany(models.Post, {
                through: models.Comments,
                foreignKey: 'user_id',
                otherKey: 'post_id',
              });
          
              models.Post.belongsToMany(models.User, {
                through: models.Comments,
                foreignKey: 'post_id',
                otherKey: 'user_id',
              });
          
              models.Comments.belongsTo(models.User, {
                foreignKey: 'user_id',
                as: 'users',
              });
          
              models.Comments.belongsTo(models.Post, {
                foreignKey: 'post_id',
                as: 'posts',
              });
            }
          }
      }
    );
   
    return Comments;
    
  };