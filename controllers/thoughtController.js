const {User, Thought} = require('../models');

module.exports = {
    async getAllThoughts(req, res){
        try{
            const thoughts = await Thought.find();
            res.status(200).json(thoughts);
        }catch(err){
            res.status(500).json(err);
        }
    },
    async getOneThought(req,res){
        try{
            const thought = await Thought.findOne({_id: req.params.thoughtId});
            res.status(200).json(thought);
        }catch(err){
            res.status(500).json(err);
        }
    },
    async createThought(req,res){
        try{
            const newThought = await Thought.create(req.body);
            const updateUserThoughts = await User.findOneAndUpdate({_id: req.params.userId},
                {$addToSet:{thoughts: newThought._id}},
                {new:true}
            );
        
            if(!updateUserThoughts){
                return res.status(400).json({message: "Thought created but could not find a user"});
            }
            res.status(200).json({message: `Thank you ${updateUserThoughts.username}! you now have ${updateUserThoughts.thoughts.length} thoughts!`});
        }catch(err){
            res.status(500).json(err);
        }
    },
    async updateThought(req,res){
        try{

            const updateThought = await Thought.findOneAndUpdate({_id: req.params.thoughtId},
                {$set: req.body},
                {runValidators: true, new: true}
            );
    
            if(!updateThought){
                return res.status(400).json({message: "Thought could not be found"});
            }
            res.status(200).json({message: "Thought updated"});
        }catch(err){
            res.status(500).json(err);
        }
    },
    async deleteThought(req,res){
        try{

            const deleteThought = await Thought.findOneAndDelete({_id: req.params.thoughtId});
    
            if(!deleteThought){
                return res.status(400).json({message: "Thought could not be found"});
            }
            const updateUserThoughts = await User.findOneAndUpdate({_id: req.params.userId},
                {$pull: {thoughts: req.params.thoughtId}},
                {new: true}
            )
            if(!updateUserThoughts){
                return res.status(400).json({message: "User could not be found"});
            }
            res.status(200).json({message: `Thought deleted, ${updateUserThoughts.username} now has ${updateUserThoughts.thoughts.length} thoughts`});
        }catch(err){
            res.status(500).json(err);
        }
    },
    async addReaction(req,res){
        try{
            const addReaction = await Thought.findOneAndUpdate({_id: req.params.thoughtId},
                {$addToSet: {reactions: req.body}},
                {new:true}
            );
    
            if(!addReaction){
                return res.status(400).json({message: "Thought could not be found"});
            }
            res.status(200).json({message: `Reaction added, this thought now has ${addReaction.reactions.length} reactions`});
        }catch(err){
            res.status(500).json(err);
        }
    },
    async deleteReaction(req,res){
        try{
            const removeReaction = await Thought.findOneAndUpdate({_id: req.params.thoughtId},
                {$pull: {reactions: {reactionId: req.params.reactionId}}},
                {new:true}
            );
    
            if(!removeReaction){
                return res.status(400).json({message: "Thought could not be found"});
            }
            res.status(200).json({message: `Reaction removed, this thought now has ${removeReaction.reactions.length} reactions`});
        }catch(err){
            res.status(500).json(err);
        }
    },
    
}