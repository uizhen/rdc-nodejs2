const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/blog.html', shopController.getBlog);

router.get('/service.html', shopController.getService);

router.get('/contact.html', shopController.getContact);

router.get('/about.html', shopController.getAbout);

module.exports = router;
