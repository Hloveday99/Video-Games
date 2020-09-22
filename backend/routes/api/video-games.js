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

module.exports = router;
