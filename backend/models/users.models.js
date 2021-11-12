// module.exports = (sequelize, type) => {
//     return sequelize.define('users', {
//         id: {
//             type: type.INTEGER.UNSIGNED,
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false,
//         },
//         firstname: {
//             allowNull: false,
//             type: type.STRING,
//         },
//         lastname: {
//             allowNull: false,
//             type: type.STRING,
//         },
//         email: {
//             allowNull: false,
//             type: type.TEXT,
//             unique: true,
//         },
//         password: {
//             allowNull: false,
//             type: type.STRING,
//         },
//         imageURL: {
//             allowNull: true,
//             type: type.STRING,
//         },
//     })
// }