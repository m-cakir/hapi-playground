"use strict";

module.exports = function(sequelize, DataTypes) {

    const User = sequelize.define("User", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        username         : {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password         : {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: false,
        underscored: true,
        tableName: 'user'
    });

    return User;
};
