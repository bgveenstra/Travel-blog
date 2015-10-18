var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	location: {type: String, required: true},
    description: { type: String, required: true}, 
    likeCount: { type: Number, default: 0},
    date: { type: Date, default: Date.now }
});

var Post = mongoose.model('Post', postSchema);


module.exports = Post;