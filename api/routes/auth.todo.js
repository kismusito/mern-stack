const express = require('express');
const router = express.Router();
const {singin , singup , confirmToken} = require('../controllers/auth.controller');

router.post('/singin' , singin);
router.post('/singup' , singup);
router.post('/verify' , confirmToken);

module.exports = router;