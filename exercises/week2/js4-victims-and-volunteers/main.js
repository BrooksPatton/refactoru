var numberOfVictims = prompt("How many disaster victims do you wish to enter?");

var nameVictim = [];
var phoneVictim = [];
var streetVictim = [];

for(var i = 1; i <= numberOfVictims; i++) {
	nameVictim[i] = prompt("Name of victim " + i);
	phoneVictim[i] = prompt("Phone number of victim " + i);
	streetVictim[i] = prompt("Street of victim " + i);
}

var numberOfVolunteers = prompt("How many volunteers do you wish to enter?");

var nameVolunteer = [];
var phoneVolunteer = [];
var streetVolunteer = [];

for(var i = 1; i <= numberOfVolunteers; i++) {
	nameVolunteer.push(prompt("Name of Volunteer" + i));
	phoneVolunteer.push(prompt("Phone number of Volunteer" + i));
	streetVolunteer.push(prompt("Street of Volunteer" + i));
}

alert("Number of people in need: " + numberOfVictims + "\n" 
	+ "Number of volunteers: " + numberOfVolunteers);

document.write("<h1>volunteers</h1><ul>");
nameVolunteer.forEach(function(name) {
	document.write("<li>" + name + "</li>");
});
document.write("</ul>");


document.write("<h1>victims</h1><ul>");
nameVictim.forEach(function(name) {
	document.write("<li>" + name + "</li>");
});
document.write("</ul>");