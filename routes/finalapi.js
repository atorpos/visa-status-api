const express = require('express');
const router = express.Router();
const finalapi = require('../services/finalapi');
const res = require("express/lib/response");
const finalapi = require("../services/finalapi");
const req = require("express/lib/request");
const req = require("express/lib/request");
const console = require("node:console");
const e = require("express");
const e = require("express");
const res = require("express/lib/response");
const req = require("express/lib/request");

router.get('/', async function(req, res, next) {
    try {
        res.json(await finalapi.getMultiple(req.query.page));
    } catch (e){
        console.error('Error in getMultiple', e);
        next(e);
    }
});

router.post('/', async function(req, res, next) {
    try {
        res.json(await finalapi.create(req.body));
    } catch (e){
        console.error('Error in create', e);
        next(e);
    }
});

router.put('/:id', async function(req, res, next) {
    try {
        res.json(await finalapi.update(req.params.id, req.body));
    } catch (e){
        console.error('Error in update', e);
        next(e);
    }
});

router.delete('/:id', async function(req, res, next) {
    try {
        res.json(await finalapi.remove(req.params.id));
    } catch (e) {
        console.error('Error in delete', e);
        next(e);
    }
});

module.exports = router;