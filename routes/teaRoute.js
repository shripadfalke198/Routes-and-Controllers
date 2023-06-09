const express = require('express');

const router = express.Router();

const teaController = require('../controllers/teaController.js');

router.post('/tea',teaController.newTea);
router.get('/tea',teaController.getAllTea);
router.delete('/tea',teaController.deleteAllTea);

router.get('/tea/:name', teaController.getOneTea);
router.post('/tea/:name', teaController.newComment);
router.delete('/tea/:name', teaController.deleteOneTea);

module.exports = router;