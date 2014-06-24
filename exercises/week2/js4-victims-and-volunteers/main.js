function addVictim(form) {
	var listItem = document.createElement("li")
	listItem.innerHTML = "<li>" + form.victimName.value + "</li>";
	document.getElementById("victims").appendChild(listItem);
}

function addVolunteer(form) {
	var listItem = document.createElement("li")
	listItem.innerHTML = "<li>" + form.volunteerName.value + "</li>";
	document.getElementById("volunteers").appendChild(listItem);
}