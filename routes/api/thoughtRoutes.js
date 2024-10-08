const router = require('express').Router();
const { getAllThoughts, 
        getOneThought, 
        createThought,
        updateThought,
        deleteThought,
        addReaction,
        deleteReaction
        } = require('../../controllers/thoughtController')

router.route('/').get(getAllThoughts);

router.route('/:thoughtId').get(getOneThought).put(updateThought);

router.route('/:userId').post(createThought);

router.route('/:thoughtId/:userId').delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports =router;