'use strict';

const bcrypt = require( 'bcrypt' );
const base64 = require( 'base-64' );
const { User } = require( '../DataBase-Models' );

const signup = ( req, res ) => {
    const { username, password, email, firstName, lastName } = req.body;
    User.create( {
        username,
        password : bcrypt.hashSync( password, 10 ),
        email,
        firstName,
        lastName
    } )
        .then( user => res.status( 201 ).json( user ) )
        .catch( err => res.status( 400 ).json( err ) );
};

const login = async ( req, res ) => {
    const basicAuth = req.headers.authorization.split( ' ' )[ 1 ];
    const decoded = base64.decode( basicAuth );
    const [ username, password ] = decoded.split( ':' );
    const user = await User.findOne( { where: { username } } );
    if ( user ) {
        const isSame = await bcrypt.compare( password, user.password );
        if ( isSame ) {
            res.status( 200 ).json( user );
        } else {
            res.status( 400 ).json( { message: 'Incorrect password' } );
        }
    }
};

// const favorite = ( req, res ) => {
//     const { id } = req.user;
//     const { favoriteItems } = req.body;
//     User.update( { favoriteItems }, { where: { id } } )
//         .then( user => res.status( 200 ).json( user ) )
//         .catch( err => res.status( 400 ).json( err ) );
// };

module.exports = {
    signup,
    login,
    // favorite
};
