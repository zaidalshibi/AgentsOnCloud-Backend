'use strict';

const { Item, User, Comment } = require( '../DataBase-Models' );

const addItem = ( req, res ) => {
    const { name, price, description, image } = req.body;
    const ownerID = req.user.id;
    Item.create( { name, price, description, image, ownerID } )
        .then( item => res.status( 201 ).json( item ) )
        .catch( err => res.status( 400 ).json( err ) );
};

const getItems = ( req, res ) => {
    Item.findAll( {
        include: [ User, Comment ]
    }
    )
        .then( items => res.status( 200 ).json( items ) )
        .catch( err => res.status( 400 ).json( err ) );
};

const getItem = ( req, res ) => {
    const id = req.params.id;
    Item.findOne(
        { where: { id }, include: [ User, Comment ] } )
        .then( item => res.status( 200 ).json( item ) )
        .catch( err => res.status( 400 ).json( err ) );
};

const updateItem = ( req, res ) => {
    const id = req.params.id;
    const newItem = req.body;
    Item.update( newItem, { where: { id } } )
        .then(
            () => Item.findOne( { where: { id } } )
                .then( item => res.status( 202 ).json( item ) )
                .catch( err => res.status( 400 ).json( err ) )
        )
        .catch( err => res.status( 400 ).json( err ) );
};

const deleteItem = ( req, res ) => {
    const id = req.params.id;
    Item.destroy( { where: { id } } )
        .then( () => res.status( 204 ) )
        .catch( err => res.status( 400 ).json( err ) );
};

module.exports = {
    addItem,
    getItems,
    getItem,
    updateItem,
    deleteItem
};