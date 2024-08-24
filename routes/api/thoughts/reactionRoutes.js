const router = require('express').Router();

router.post('/:thoughtId/reactions', (req,res) =>{
    res.status(200).json({message: 'this is post /:thoughtId/reactions'})
});

router.delete('/:thoughtId/reactions', (req,res) =>{
    res.status(200).json({message: 'this is delete /:thoughtId/reactions'})
});



module.exports =router;