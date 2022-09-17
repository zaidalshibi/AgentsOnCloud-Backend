'use strict';

const Item = ( sequelize, DataTypes ) => sequelize.define( 'Item', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ownerID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
} );

module.exports = Item;