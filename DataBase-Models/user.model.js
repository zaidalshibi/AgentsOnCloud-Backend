'use strict';

const jwt = require( 'jsonwebtoken' );

const User = ( sequelize, DataTypes ) => sequelize.define( 'User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // favoriteItems: {
    //     type: DataTypes.ARRAY( DataTypes.INTEGER ),
    //     allowNull: true
    // },
    token: {
        type: DataTypes.VIRTUAL,
        get () {
            return jwt.sign( 
                { username: this.username }, 
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
                );
        },
        set ( value ) {
            throw new Error( 'Do not try to set the `token` value!' );
        }
    }
} );

module.exports = User;