'use strict';

const express = require( 'express' );
const cors = require( 'cors' );
const userRouter = require( './Routes/user.route' );
const itemRouter = require( './Routes/item.route' );
const commentRouter = require( './Routes/comment.route' );
const app = express();

app.use( cors() );
app.use( express.json() );
app.use( userRouter );
app.use( itemRouter );
app.use( commentRouter );

app.get( '/', ( req, res ) => {
    res.status( 200 ).json( {
        message: 'Home page',
        code: 200
    } );
} );

function start ( port ) {
    app.listen( port, () => {
        console.log( `Server is running on port ${port}` );
    } );
}

module.exports = {
    app,
    start
};