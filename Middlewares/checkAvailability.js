'use strict';

const { User } = require( '../DataBase-Models' );

const checkAvailability = ( req, res, next ) => {
    const { username, email } = req.body;
    const checkUsername = User.findOne( { where: { username } } );
    const checkEmail = User.findOne( { where: { email } } );
    Promise.all( [ checkUsername, checkEmail ] )
        .then( ( [ user, email ] ) => {
            if ( user ) {
                res.status( 400 ).json( { message: 'Username already exists' } );
            } else if ( email ) {
                res.status( 400 ).json( { message: 'Email already exists' } );
            } else {
                next();
            }
        }
        )
        .catch( err => res.status( 400 ).json( err ) );
};

module.exports = checkAvailability;