const router = require('express').Router();

router.get('/', (req,res) =>{
    res.status(200).json({message: 'this is get /api/thoughts'})
});

router.get('/:thoughtId', (req,res) =>{
    res.status(200).json({message: 'this is get /api/thoughts/:thoughtId'})
});

router.post('/:userId', (req,res) =>{
    res.status(200).json({message: 'this is post /api/thoughts/:userId'})
});

router.put('/:thoughtId', (req,res) =>{
    res.status(200).json({message: 'this is put /api/thoughts/:thoughtId'})
});

router.delete('/:thoughtId', (req,res) =>{
    res.status(200).json({message: 'this is delete /api/thoughts/:thoughtId'})
});


module.exports =router;