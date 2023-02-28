'use strict';

const { Sequelize, DataTypes } = require( 'sequelize' );

// Incase you want to use a deployed database activate the following lines
const sequelizeOptions = {
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false
    //     }
    // }
};

// create the database connection
const sequelize = new Sequelize( process.env.DATABASE_URL, sequelizeOptions );

// create the database models
const user = require( './user.model' );
const userModel = user( sequelize, DataTypes );

const item = require( './item.model' );
const itemModel = item( sequelize, DataTypes );

const comment = require( './comment.model' );
const commentModel = comment( sequelize, DataTypes );



// Define relationships
userModel.hasMany( itemModel, { foreignKey: 'ownerID', sourceKey: 'id' } );
itemModel.belongsTo( userModel, { foreignKey: 'ownerID', targetKey: 'id' } );

itemModel.hasMany( commentModel, { foreignKey: 'itemID', sourceKey: 'id' } );
commentModel.belongsTo( itemModel, { foreignKey: 'itemID', targetKey: 'id' } );

userModel.hasMany( commentModel, { foreignKey: 'ownerID', sourceKey: 'id' } );
commentModel.belongsTo( userModel, { foreignKey: 'ownerID', targetKey: 'id' } );



module.exports = {
    db: sequelize,
    User: userModel,
    Item: itemModel,
    Comment: commentModel
};