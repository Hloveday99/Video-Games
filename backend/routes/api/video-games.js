const express = require('express');
const router = express.Router();

const db = require('../../dal/mongo')

/* GET users listing. */
router.get('/', function(req, res, next) {
    const info = {
        query: {},
        collection: req.app.locals.collectionVGhub
    }
    db.readAll(info)
    .then((VGhub) => {
        res.json(VGhub)
    })
    .catch(err => {
        console.log(err)
    })
});

router.post('/', function(req, res, next) {
    const info = {
        doc: req.body,
        collection: req.app.locals.collectionVGhub
    }
    db.createOne(info)
    .then((data) => {
        res.json(data.ops[0])
    })
    .catch(err => {
        console.log(err)
    })
})
router.delete('/:id', function(req, res, next) {
    const info = {
        id: req.params.id,
        collection: req.app.locals.collectionVGhub
    }
    db.deleteOne(info)
    .then((data) => {
        res.json({ msg: `deleted ${info.id}` })
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;
