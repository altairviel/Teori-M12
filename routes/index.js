
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.get('/posts', homeController.posts);
router.get('/posts/:id', homeController.detail);
router.get('/about', homeController.about);

module.exports = router;
