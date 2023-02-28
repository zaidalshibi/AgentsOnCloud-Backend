'use strict';

const verifyOwner = ( req, res, next ) => {
    if ( req.user.id == req.body.ownerID  ) {
        next();
    } else {
        res.status( 400 ).json( { message: 'You are not the owner' } );
    }
};

module.exports = verifyOwner;