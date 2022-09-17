"use strict";


module.exports = ( err, _req, res, _next ) => {
    res.status( 404 ).send( {
        code: 404,
        message: `Server Error: ${err.message || err}`,
    } );
};