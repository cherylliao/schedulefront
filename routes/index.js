const express = require('express');
const router = express.Router();

const { create, conflict } = 
require('../controllers/appointment')


// router.get('/appointments', conflict);

router.post('/create', create);




module.exports = router;