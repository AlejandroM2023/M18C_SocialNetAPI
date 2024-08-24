const router = require('express').Router();
const users = require('./userRoutes');
const freinds = require('./freindRoutes');

router.use('/', users);
router.use('/', freinds);

module.exports = router;