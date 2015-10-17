var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    body: String, 
    date: { type: Date, default: Date.now }
});

var Post = mongoose.model('Post', postSchema);


module.exports = Post;