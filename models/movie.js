"use strict";

module.exports = function(sequelize, DataTypes) {

    const Movie = sequelize.define("Movie", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name         : {
            type: DataTypes.STRING,
            allowNull: false
        },
        director         : {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: false,
        underscored: true,
        tableName: 'movie'
    });

    return Movie;
};
