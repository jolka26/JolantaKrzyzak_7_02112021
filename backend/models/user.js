module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,  
      }, 
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },   
      lastname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profil_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {
      underscored: true,
    }
  );
 
  return User;
  
};


//     email: "zenia@mail.com",
//     firstname: "zenowefa",
//     lastname: "kolebka",
//     password: "veryhardpass",
//     profil_image: "myimage.png",
//     is_admin: false,


// {
//   "email": "danuta@mail.com",
//   "firstname": "danuta",
//   "lastname": "kruk",
//   "password": "veryhardpass",
//   "profil_image": "myimage.png",
//   "is_admin": true
// }

// {
//   "email": "bruno@mail.com",
//   "firstname": "bruno",
//   "lastname": "black",
//   "password": "veryhardpass",
//   "profil_image": "myimage.png"
// }



