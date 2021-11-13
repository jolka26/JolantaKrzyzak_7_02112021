module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
      "post",
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
              model: 'user',
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
      },
      {
        underscored: true,
      }
    );
   
    return Post;
    
  };