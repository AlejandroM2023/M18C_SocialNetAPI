const router = require('express').Router();

router.post('/:userId/freinds/:freindId', (req,res) =>{
    res.status(200).json({message: 'this is post /:userId/freinds/:freindId'})
});

router.delete('/:userId/freinds/:freindId', (req,res) =>{
    res.status(200).json({message: 'this is delete /:userId/freinds/:freindId'})
});



module.exports =router;