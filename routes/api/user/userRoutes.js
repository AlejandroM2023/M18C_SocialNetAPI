const router = require('express').Router();

router.get('/', (req,res) =>{
    res.status(200).json({message: 'this is get /api/users'})
});

router.get('/:userId', (req,res) =>{
    res.status(200).json({message: 'this is get /api/users/:userid'})
});

router.post('/', (req,res) =>{
    res.status(200).json({message: 'this is post /api/users'})
});

router.put('/:userId', (req,res) =>{
    res.status(200).json({message: 'this is put /api/users/:userId'})
});

router.delete('/:userId', (req,res) =>{
    res.status(200).json({message: 'this is delete /api/users/:userId'})
});


module.exports =router;