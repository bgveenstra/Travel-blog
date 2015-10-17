console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	console.log("client js working");
	$('#newPost').on('submit', function(e) {
		e.preventDefault();
		var formData = $(this).serialize();
		console.log(formData);
		$.ajax({
			url: '/posts',
			type: "POST",
			data: formData
		})
		.done(function(data) {
			console.log(formData);
			console.log("made a new post", data);
			var postHtml = "<li class='post list-group-item'><strong><font size='4'>" + data.location + ":</font></strong> <br>" + data.description + "<span data-id='" + data._id + "' class='close delete'>Remove Post</span></li>";
			$('.posts').prepend(postHtml);
			$('#newPost')[0].reset();
		})
		.fail(function(data) {
			console.log("Failed to post");
		});

	});
	$('.posts').on('click', '.close', function(e) {
		e.preventDefault();
		console.log('delete button works');
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

});
// 



















