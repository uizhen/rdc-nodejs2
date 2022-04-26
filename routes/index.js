const path = require('path');

const express = require('express');

const Controller = require('../controllers/index');

const router = express.Router();

router.get('/', Controller.getIndex);

router.get('/blog.html', Controller.getBlog);

router.get('/service.html', Controller.getService);

router.get('/contact.html', Controller.getContact);

router.get('/about.html', Controller.getAbout);

module.exports = router;
