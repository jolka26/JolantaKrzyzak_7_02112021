module.exports = (sequelize, type) => {
    return sequelize.define('posts', {
        id: {
            type: type.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        userId: {
            allowNull: false,
            type: type.INTEGER,
        },
        title: {
            allowNull: false,
            type: type.STRING,
        },
        content: {
            allowNull: false,
            type: type.TEXT,
        },
        createdAt: {
            allowNull: false,
            type: type.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: type.DATE,
        }
       
    })
}