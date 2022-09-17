'use strict';


const express = require( 'express' );
const cors = require( 'cors' );
const app = express();
const notFoundHandler = require( './errorHandlers/404' );
const errorHandler = require( './errorHandlers/500' );
const userRoutes = require( './routes/user.routes' );

app.use( cors() );
app.use( express.json() );
app.use( userRoutes );

app.get( '/', ( req, res ) => {
    res.status( 200 ).json( {
        message: 'Home page',
        code: 200
    } );
} );

function start ( port ) {
    app.listen( port, () => console.log( `Up and running on port ${port}` ) );
}

module.exports = {
    start,
    app
};