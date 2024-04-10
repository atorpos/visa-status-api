const express = require('express');
const router = express.Router();
const finalapi = require('../services/finalapi');

router.get('/', async function(req, res, next) {
    try {
        res.json(await finalapi.getMultiple(req.query.page));
    } catch (e){
        console.error('Error in getMultiple', e);
        next(e);
    }
});

module.exports = router;