'use strict';

const express = require( 'express' );
const router = express.Router();
const { addComment, getComments, getComment, updateComment, deleteComment } = require( '../Controllers/comment.controller' );
const verifyOwner = require( '../Middlewares/verifyOwner' );
const verifyToken = require( '../Middlewares/verifyToken' );

router.get( '/comment', getComments );
router.get( '/comment/:id', getComment );
router.post( '/comment', verifyToken, addComment );
router.put( '/comment/:id', verifyToken, verifyOwner, updateComment );
router.delete( '/comment/:id', verifyToken, verifyOwner, deleteComment );

module.exports = router;