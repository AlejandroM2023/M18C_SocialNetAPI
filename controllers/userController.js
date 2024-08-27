const {User, Thought} = require('../models');

module.exports = {
    async getAllUsers(req, res){
        try{
            const users = await User.find();
            res.status(200).json(users);
        }catch(err){
            res.status(500).json(err);
        }
    },

    async getOneUser(req,res){
        try{
            const user = await User.findOne({_id: req.params.userId}).populate('freinds').populate('thoughts');
            res.status(200).json(user);
        }catch(err){
            res.status(500).json(err);
        }
    },
    async createUser(req,res){
        try{
            const newUser = await User.create(req.body);
            res.status(200).json(newUser);
        }catch(err){
            res.status(500).json(err);
        }
    },
    async updateUser(req,res){
        try{
            const updateUser = await User.findOneAndUpdate({_id: req.params.userId},
                {$set: req.body},
                {runValidators: true, new:true}
            );
            if(!updateUser){
                return res.status(400).json({message: "not user found"});
            }
            res.status(200).json({message: "user updated!"});
        }catch(err){
            res.status(500).json(err);
        }
    },
    async deleteUser(req,res){
        try{
            const deleteUser = await User.findOneAndDelete({_id: req.params.userId});
            if(!deleteUser){
                return res.status(400).json({message: "No user found"});
            }
            await Thought.deleteMany({_id: {$in: deleteUser.thoughts}});
            res.status(200).json({message: "User and all toughts deleted"});
        }catch(err){
            res.status(500).json(err);
        }
    },
    async addFreind(req, res){
        try{
            const addFreind = await User.findOneAndUpdate({_id: req.params.userId},
                {$addToSet:{freinds:req.params.freindId}},
                {new: true}
            );
            if(!addFreind){
                return res.status(400).json({message: "No user found"});
            }
            res.status(200).json({message: `you now have ${addFreind.freindCount} freind(s)!`});
        }catch(err){
            res.status(500).json(err);
        }
    },
    async deleteFreind(req,res){
        try{
            const deleteFreind = await User.findOneAndUpdate({_id: req.params.userId},
                { $pull: { freinds: req.params.freindId } },
                {new: true}
            );
            console.log(deleteFreind)
            console.log(req.params.freindId)
            if(!deleteFreind){
                return res.status(400).json({message: "No user found"});
            }
            res.status(200).json(deleteFreind);
        }catch(err){
            res.status(500).json(err);
        }
    }
}