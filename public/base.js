console.log("Sanity Check: JS is working!");

$(document).ready(function(){

//variable to store each blog post in the submit form
// var blogText;
//an array to store all the blog posts
function Post(body){
	this.body = body;
	this.createdAt = new Date();
	this.comments = [];

}

//variable to keep track of how many posts
var postCount = 0;
var commentButton; 
var commentInput;
var commentDiv;
var postNumber;
var newPost;
	

  //what to do when form is submitted
 $('#blogPost').submit(function(e) {
 	e.preventDefault();

 	//set variable blogText to the value of the form
 	var blogText = $('#blogText').val();

 	//variable for the time
 	var blogDate = new Date();
 	var blogTime = (blogDate.getMonth() + 1) + " / " + blogDate.getDate() + " / " + blogDate.getFullYear();

 	

 	//variable for the comment input form
 	commentInput = "<form type='text' class='commentInput'><input type='text' class='form-control commentText' placeholder='Type your comment here...'>";
 	// //variable for the comment submit button
 	commentButton = "<button type='submit' class='btn-group-xs pull-right'>Add Comment</button></form>";
 	//variable for the div to hold the comments
 	commentDiv = "<div class='col-xs-8 col-xs-offset-2 allComments'></div>";

 	//append the new post to the page with a time stamp and comment button if something is written
 	if($('#blogText').val()) {
 		//add one to the count
 		postCount++;
 		postNumber = postCount;
 		//create new obj with the post
 		newPost = new Post(blogText);
 		$('#allPosts').prepend("<div><div class='specificPost'><form class='blogPosts'>" + "<font size='4'><big><strong>Post " + postCount + ":<br></strong></big>  " + blogText + "<br><small>Posted on:  " + blogTime + "</small></div><br><big><font color='#C1BAC7'>Comments:</font></big><br></font></form>" + commentDiv + commentInput + commentButton + "<hr></div>");
 	}
 	//reset the form to blank
 	$('#blogText').val("");
 	
 	addCommentSubmitHandler();
 	
 	
 	
 });


var commentBody;

// create function for when comments are submitted
 function addCommentSubmitHandler() {
 	$('.commentInput').submit(function(e) {
 	e.preventDefault();
 	//get content of the comment
  	commentBody = $(this).parent().find('.commentText').val();
  	var commentDate = new Date();
 	var commentTime = (commentDate.getMonth() + 1) + " / " + commentDate.getDate() + " / " + commentDate.getFullYear();
 	//if there's a value in the comment form, append it to the page
 	if(commentBody) {
 		$(this).parent().find('.allComments').append("<div class='specificComment'><font size='3'>" + commentBody + "<br><small>Commented on:  " + commentTime + "</small></font></div><br><br><br>");
 		
 	}
 	//push new comment into the post object
 	newPost.comments.push(commentBody);
 	console.log(newPost);
 	//clear comment input form
 	$('.commentText').val("");
 });
 }
 
console.log(localStorage);

});
// 






