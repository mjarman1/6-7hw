//Contact router


let Contact = require('../models/Contacts.model')
const router = require('express').Router()




router.route('/add').post((req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const newContact = new Contact ({
        name,
        email,
        message
    })
    newContact.save()
    .then(() => {
        res.json('New Contact Added')
    }).catch((err) => {
        res.status(400).json('Uh Oh ' + err)
    })
})

router.route('/').get((req, res) => {
    Contact.find()
    .then((contacts) => {
        res.json(contacts)
    }).catch((err) => {
        res.status(400).json('Uh Oh ' + err)
    })
})

module.exports = router;

//attractions router

let Attraction = require('../models/Attractions.model')
const router = require('express').Router()




router.route('/add').post((req, res) => {
    const name = req.body.name
    const description = req.body.description
    const website = req.body.website
    const image = req.body.image
    const location = req.body.location
    const newAttraction = new Attraction ({
        name,
        description,
        website,
        image,
        location
        })
    newAttraction.save()
        .then(()=>{
            res.json('New Attraction Added')
            })
            .catch((err)=>{
                res.status(400).json("Uh Oh " + err)
            })
})

router.route('/').get((req, res) => {
    Attraction.find()
    .then(attraction =>
        res.json(attraction))
        .catch((err) => {
            res.status(400).json('Uh Oh ' + err)
        });
});

router.route('/:id').get((req, res) => {
    Attraction.findById(req.params.id)
    .then((attraction) =>{
        res.json(attraction)
    }).catch((err) => {
        res.status(400).json('Uh oh ' + err)
    });
}).put((req,res)=>{
    Attraction.findById(req.params.id)
        .then((attraction)=>{
            attraction.name = req.body.name
            attraction.description = req.body.description
            attraction.website = req.body.website
            attraction.image = req.body.image
            attraction.location = req.body.location
        })
    .catch((err) => {
        res.status(400).json(' Uh Oh ' + err)
    });
});


//attractionsmodel

module.exports = router;

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const theAttractionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },   
})

const Attraction = mongoose.model('Attraction', theAttractionSchema)
module.exports = Attraction

//contacts model

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const theContactSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    }
})
const Contact = mongoose.model('Contact', theContactSchema)
module.exports = Contact