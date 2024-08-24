const router = require('express').Router();
const thoughts = require('./thoughtRoutes');
const reactions = require('./reactionRoutes');

router.use('/', thoughts);
router.use('/', reactions);

module.exports =router;