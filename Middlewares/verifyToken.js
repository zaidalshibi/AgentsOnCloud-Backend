'use strict';

const jwt = require( 'jsonwebtoken' );
const { User } = require( '../DataBase-Models' );

const verifyToken = ( req, res, next ) => {
    const authHeader = req.headers[ 'authorization' ];
    const token = authHeader && authHeader.split( ' ' )[ 1 ];
    if ( token == null ) return res.sendStatus( 401 );
    jwt.verify( token, process.env.JWT_SECRET, async( err, user ) => {
        if ( err ) return res.sendStatus( 403 );
        req.user = await User.findOne( { where: { username : user.username } } );
        next();
    } );
}

module.exports = verifyToken;