// Variable declaration


// Callback function declaration
var saveProfile = function(e) {
	e.preventDefault();
	var editProfile = {};
	editProfile.name = $("#edit-name").val();
	editProfile.bio = $("#edit-bio").val();
	editProfile.books = $("#edit-books").val();
	editProfile.jsLibraries = $("#edit-js-libraries").val();
	loadProfile(editProfile);
};

// Function declaration
var loadProfile = function(profile) {
	$("#name").text(profile.name);
	$("#bio").text(profile.bio);
	$("#books").text(profile.books);
	$("#js-libraries").text(profile.jsLibraries);
}

// Event handlers
$(document).on('ready', function() {
  
	$("#edit-submit").on("click", saveProfile);

});