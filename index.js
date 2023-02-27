'use strict';

require( 'dotenv' ).config();
const server = require( './server.js' );
const { db } = require( './DataBase-Models/index.js' );
const PORT = process.env.PORT || 3001;

db.sync().then( () => {
    server.start( PORT );
} ).catch( ( error ) => {
    console.error( 'Error starting server', error );
} );
