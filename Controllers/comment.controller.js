'use strict';

const { Comment } = require( '../DataBase-Models' );

const addComment = ( req, res ) => {
    const { comment, itemID } = req.body;
    const ownerID = req.user.id;
    Comment.create( { comment, itemID, ownerID } )
        .then( comment => res.status( 201 ).json( comment ) )
        .catch( err => res.status( 400 ).json( err ) );
};

const getComments = ( req, res ) => {
    Comment.findAll()
        .then( comments => res.status( 200 ).json( comments ) )
        .catch( err => res.status( 400 ).json( err ) );
};

const getComment = ( req, res ) => {
    const id = req.params.id;
    Comment.findOne( { where: { id } } )
        .then( comment => res.status( 200 ).json( comment ) )
        .catch( err => res.status( 400 ).json( err ) );
};

const updateComment = ( req, res ) => {
    const id = req.params.id;
    const newComment = req.body;
    Comment.update( newComment, { where: { id } } )
        .then(
            () => Comment.findOne( { where: { id } } )
                .then( comment => res.status( 202 ).json( comment ) )
                .catch( err => res.status( 400 ).json( err ) )
        )
        .catch( err => res.status( 400 ).json( err ) );
};

const deleteComment = ( req, res ) => {
    const id = req.params.id;
    Comment.destroy( { where: { id } } )
        .then( () => res.status( 204 ) )
        .catch( err => res.status( 400 ).json( err ) );
};

module.exports = {
    addComment,
    getComments,
    getComment,
    updateComment,
    deleteComment
};