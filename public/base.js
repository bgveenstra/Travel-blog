console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	console.log("client js working");
	$('#newPost').on('submit', function(e) {
		e.preventDefault();
		var formData = $(this).serialize();
		$('#title').focus();
		console.log(formData);
		$.ajax({
			url: '/posts',
			type: "POST",
			data: formData
		})
		.done(function(data) {
			console.log("made a new post", data);
			var postHtml = "<li class='post'><strong><font size='4'>" + data.location + ":</font></strong> <br>" + data.description + "<br><img id='like' data-id='<%= post._id %>' src='http://iconfever.com/images/portfolio/thumbs/freephotoshoptutorials.org-heart-icon.jpg'><small>" + data.likeCount +" likes</small><span data-id='" + data._id + "'class='close delete'>X</span></li>";
			$('.posts').prepend(postHtml);
			$('#newPost')[0].reset();
		})
		.fail(function(data) {
			$('#fail').modal();
			console.log("Failed to post");
		});

	});
	$('.posts').on('click', '.close', function(e) {
		e.preventDefault();
		var postId = $(this).data().id;
		var deletedPost = $(this).closest('li');

		$.ajax({
			url:'/posts/' + postId,
			type: "DELETE"
		})
		.done(function(data) {
			console.log(data);
			$(deletedPost).remove();
			console.log("post has been deleted");
		})
		.fail(function(data) {
			console.log("failed to delete post");

		});
	});
	$('.posts').on('click', '#like', function(e) {
		e.preventDefault();
		var postID = $(this).data().id;
		var likedPost = $(this).closest('li');
		console.log(postID);

		$.ajax({
			url:'/posts/' + postID,
			type: "PUT"
		})
		.done(function(data) {
			console.log("post has been liked");
		})
		.fail(function(data) {
			console.log("failed to like post");
		});
	});

});
// 



















