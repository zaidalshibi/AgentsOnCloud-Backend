'use strict';

const Comment = ( sequelize, DataTypes ) => sequelize.define( 'Comment', {
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    itemID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
} );

module.exports = Comment;