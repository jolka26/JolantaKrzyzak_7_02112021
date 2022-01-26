module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
      "posts",
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          unique: true, 
        },
        user_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
              model: 'users',
              key: 'id',
          }
        },
        post_image: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        content: {
            type: DataTypes.STRING(1024),
            allowNull:true,
        },
      },{
        underscored: true,
      },{
        classMethods: {
          associate: function(models) {
            //associations can be defined here
            Post.belongsToMany(models.User, {
                foreignKey: {
                  allowNull: false
                }            
              });
              models.Post.hasMany(models.Comments,
                { onDelete: 'cascade' });
          }
        }
      }
    );
    return Post;
  };

