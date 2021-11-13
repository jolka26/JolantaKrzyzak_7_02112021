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
      is_admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
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



