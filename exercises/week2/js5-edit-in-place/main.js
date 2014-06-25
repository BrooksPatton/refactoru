var hideTextBlock = function(obj) {
	$("#" + obj.id).hide();
}

var insertTextField = function(obj) {
	var inputId = obj.id + "-input";
	var textInput = "<textarea class='block input' id='" + inputId + "'></textarea>";
	$("#" + obj.id).before(textInput);
	$("#" + inputId).css({
		"height": obj.height,
		"width": obj.width
	});
	$("#" + inputId).text(obj.content);

	$("#" + inputId).focus();

	blurEvent(inputId);

	return inputId;
}

var getOriginalId = function(inputId) {
	var arr = inputId.split("-");
	return arr[0];
};

var blurEvent = function(inputId) {
	$("#" + inputId).blur(function() {
		var content = $("#" + inputId).val();
		var originalId = getOriginalId(inputId);
		$("#" + inputId).remove();
		$("#" + originalId).show();
		$("#" + originalId).text(content);
	});
};

$(document).on('ready', function() {
  $(".editable").click(function(element) {
  	var clickedOnId = {
  		id: element.target.id,
  		height: $("#" + element.target.id).height(),
  		content: $("#" + element.target.id).text(),
  		width: $("#" + element.target.id).width(),
  	};
  	hideTextBlock(clickedOnId);
  	insertTextField(clickedOnId);
  });
});