const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        ingredients: {
            type: DataTypes.STRING,
        },
        url: {
            type: DataTypes.TEXT,
        },
        img: {
            type: DataTypes.TEXT,
        },
        ingredients: {
            type: DataTypes.TEXT,
        }
    },
    {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: 'recipe',
    }
);

module.exports = Recipe;