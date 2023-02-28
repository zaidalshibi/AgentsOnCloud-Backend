'use strict';

const Item = ( sequelize, DataTypes ) => sequelize.define( 'Item', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: 'No description'
    },
    price: {
        type: DataTypes.INTEGER,
        defaultValue: 15
    },
    image: {
        type: DataTypes.STRING,
        defaultValue: 'https://via.placeholder.com/150/FFFFFF/000000?text=AgentsOnCloud'
    },
    ownerID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
} );

module.exports = Item;