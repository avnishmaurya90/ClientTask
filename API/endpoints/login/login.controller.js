const express = require('express');
const router = express.Router();
const loginService=require('./login.service');

router.get('/', login);
module.exports = router;

async function login(req, res, next) {
    await loginService.login(req.query)
        .then(data => res.status(data.status).json(data))
        .catch(next);
}