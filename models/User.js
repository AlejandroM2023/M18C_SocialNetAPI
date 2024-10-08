const {Schema, model} = require('mongoose');


const userSchema = new Schema({
    username: {type: String, unique: true, required: true, trim: true},
    email:{type: String, required: true, unique: true, match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]},
    thoughts: [{type: Schema.Types.ObjectId, ref: 'thought'}],
    freinds: [{type: Schema.Types.ObjectId, ref: 'user'}]
},
{
    toJSON: {
        virtuals: true
    }
});

userSchema.virtual('freindCount').get(function(){
    return this.freinds.length;
})

const User = model('user', userSchema);

module.exports = User;