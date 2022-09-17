'use strict';

const express = require( 'express' );
const router = express.Router();
const {User} = require( '../models/index' );

router.post( '/signup', async ( req, res ) => {
    const user =  {
        username: req.body.username,
        password: req.body.password
    } ;
    try {
        const newUser = await User.create(user);
        res.status( 201 ).json( newUser );
    } catch ( err ) {
        res.status( 400 ).json( { message: err.message } );
    }
} );

router.get( '/users', async ( req, res ) => {
    try {
        const users = await User.read();
        res.status( 200 ).json( users );
    } catch ( err ) {
        res.status( 500 ).json( { message: err.message } );
    }
} );

router.post( '/login', async ( req, res ) => {
    const user = await User.read( 1 );
    if ( user == null ) {
        return res.status( 400 ).send( 'Cannot find user' );
    }
    try {
        if ( await bcrypt.compare( req.body.password, user.password ) ) {
            res.send( 'Success' );
        } else {
            res.send( 'Not Allowed' );
        }
    } catch {
        res.status( 500 ).send();
    }
} );




module.exports = router;