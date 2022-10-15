const express = require('express');
const router = express.Router();
const pool = require('../db')

const { requiresAuth } = require('express-openid-connect');

router.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

router.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

module.exports = router;

