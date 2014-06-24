var volunteers = [];

function addVictim(form) {
	var listItem = document.createElement("li")
	listItem.innerHTML = "<li>" + form.victimName.value + "<button onclick='checkVictim(\"" + form.victimAddress.value + "\");'>Check</button></li>";
	document.getElementById("victims").appendChild(listItem);
}

function addVolunteer(form) {
	volunteers.push({name: form.volunteerName.value, phone: form.volunteerPhone.value, address: form.volunteerAddress.value});
	var listItem = document.createElement("li")
	listItem.innerHTML = "<li>" + form.volunteerName.value + "</li>";
	document.getElementById("volunteers").appendChild(listItem);
}

function checkVictim(victimAddress) {
	var message = "The following volunteers are available: \n ";
	volunteers.forEach(function(volunteer) {
		if(victimAddress.toLowerCase() === volunteer.address.toLowerCase()) {
			message += volunteer.name + " - " + volunteer.phone + "\n ";
		}
	});
	alert(message);
}