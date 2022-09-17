'use strict';
const bcrypt = require( 'bcrypt' );
const UserModel = require( '../models/user.model' );


async function Auth ( req, res, next ) {
    const users = await UserModel.findAll();
    const user = users.find( user => user.name === req.body.name );
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
}
module.exports = Auth;