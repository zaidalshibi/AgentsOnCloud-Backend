'use strict';

const express = require( 'express' );
const router = express.Router();
const { addItem, getItems, getItem, updateItem, deleteItem } = require( '../Controllers/item.controller' );
const verifyOwner = require( '../Middlewares/verifyOwner' );
const verifyToken = require( '../Middlewares/verifyToken' );

router.get( '/item', getItems );
router.get( '/item/:id', getItem );
router.post( '/item', verifyToken, addItem );
router.put( '/item/:id', verifyToken, verifyOwner, updateItem );
router.delete( '/item/:id', verifyToken, verifyOwner, deleteItem );

module.exports = router;