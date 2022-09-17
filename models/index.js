'use strict';

const { Sequelize, DataTypes } = require( 'sequelize' );
const user = require( './user.model' );
const item = require( './item.model' );
const POSTGRES_URL = process.env.DATABASE_URL || "postgresql://zaid:1470@localhost:5432/zaid";
const Collection = require( '../collections/collection' );

const sequelizeOption = {
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false
    //     }
    // }
};

let sequelize = new Sequelize( POSTGRES_URL, sequelizeOption );
const userModel = user( sequelize, DataTypes );
const itemModel = item( sequelize, DataTypes );

userModel.hasMany( itemModel, { foreignKey: 'ownerID', sourceKey: 'id' } );
itemModel.belongsTo( userModel, { foreignKey: 'ownerID', targetKey: 'id' } );

const userCollection = new Collection( userModel );
const itemCollection = new Collection( itemModel );


module.exports = {
    db: sequelize,
    User: userCollection,
    Item: itemCollection
};