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
	switchToProfile();
};

var switchToEditProfile = function() {
	populateEditProfileForm();
	toggleDisplay(".edit-button");
	toggleDisplay(".profile");
	toggleDisplay(".edit-profile");
};

var cancelEdit = function() {
	switchToProfile();
}

// Function declaration
var loadProfile = function(profile) {
	$("#name").text(profile.name);
	$("#bio").text(profile.bio);
	$("#books").text(profile.books);
	$("#js-libraries").text(profile.jsLibraries);
};

var toggleDisplay = function(element) {
	$(element).toggle();
};

var switchToProfile = function() {
	toggleDisplay(".edit-button");
	toggleDisplay(".profile");
	toggleDisplay(".edit-profile");
};

var populateEditProfileForm = function() {
	$("#edit-name").val($("#name").text());
	$("#edit-bio").val($("#bio").text());
	$("#edit-books").val($("#books").text());
	$("#edit-js-libraries").val($("#js-libraries").text());
};

// Event handlers
$(document).on('ready', function() {
  
	$("#edit-submit").on("click", saveProfile);

	$("#edit-profile").on("click", switchToEditProfile);

	$("#edit-cancel").on("click", cancelEdit);

});