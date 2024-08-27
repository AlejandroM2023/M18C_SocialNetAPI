const router = require('express').Router();

router.route('/').get();

router.route('/:thoughtId').get().put().delete();

router.route('/:userId').post();

router.route('/:thoughtId/reactions').post().delete();

module.exports =router;