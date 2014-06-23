var victims = [];
var volunteers = [];
var count = 0;
var name = "";
var phone = "";
var street = "";

while(confirm("Would you like to enter a victim?") === true) {
	victims[count] = {
		name: prompt("Name of victim"),
		phone: prompt("Phone number of victim"),
		street: prompt("Street of victim")
	};
	count++;
}

count = 0;
while(confirm("Would you like to enter a volunteer?") === true) {
	volunteers[count] = {
		name: prompt("Name of Volunteer"),
		phone: prompt("Phone number of Volunteer"),
		street: prompt("Street of Volunteer")
	};
	count++;
}

document.write("<h1>Number of people in need: " + victims.length + "</h1>");
victims.forEach(function(victim) {
	document.write("<ul><li>" + victim.name + "</li>");
	document.write("<li><ul><li>" + victim.phone + "</li>");
	document.write("<li>" + victim.street + "</li></ul></ul>");
});

document.write("<h1>Number of volunteers: " + volunteers.length + "</h1>");
volunteers.forEach(function(volunteer) {
	document.write("<ul><li>" + volunteer.name + "</li>");
	document.write("<li><ul><li>" + volunteer.phone + "</li>");
	document.write("<li>" + volunteer.street + "</li></ul></ul>");
});

var victimName = prompt("Enter the name of a victim");
victims.forEach(function(victim){
	if(victimName === victim.name) {
		street = victim.street;
	}
});

var volunteersAvailable = [];
volunteers.forEach(function(volunteer) {
	if(street === volunteer.street) {
		volunteersAvailable.push(volunteer)
	}
});

document.write("<h2>Help for " + victimName + "</h2>");
document.write("<ul>");
volunteersAvailable.forEach(function(volunteer){
	document.write("<li>" + volunteer.name + "</li>");
});
document.write("</ul>");