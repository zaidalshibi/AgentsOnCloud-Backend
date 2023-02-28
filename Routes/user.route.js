'use strict';

const express = require( 'express' );
const router = express.Router();
const { signup, login } = require( '../Controllers/user.controller' );
const checkAvailability = require( '../Middlewares/checkAvailability' );

router.post( '/signup', checkAvailability, signup );
router.post( '/login', login );

module.exports = router;