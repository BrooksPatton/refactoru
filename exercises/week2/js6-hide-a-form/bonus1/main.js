// Variable declaration


// Callback function declaration
function switchToForm() {
	$(".profile").hide();
	$(this).hide();
	$(".edit-profile").show();
}

function switchToProfile() {
	$(this).closest(".container").find(".edit-profile").hide();
	$(".profile").show();
	$(".edit-button").show();
}

function saveProfileInfo() {
	var info = $(this).val();
	var target = $(this).data();
	$(target.target).text(info);
}

function selectEverythingInField() {
	$(this).select();
}

// Function declaration


// Event handlers
$(document).on('ready', function() {
  
	$(".edit-button").on("click", switchToForm);
	$("#edit-hide").on("click", switchToProfile);
	$(".edit").on("blur", saveProfileInfo);
	$(".edit").on("focus", selectEverythingInField);

});