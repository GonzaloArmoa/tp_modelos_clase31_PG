const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorsController');

router.get('/actors', /* (req,res) => res.send("Hola"))  */actorsController.list);
router.get('/actors/detail/:id', actorsController.detail);


module.exports = router;