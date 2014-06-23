var victims = {};
victims.number = prompt("How many disaster victims do you wish to enter?");

victims.name = [];
victims.phone = [];
victims.street = [];

for(var i = 1; i <= victims.number; i++) {
	victims.name[i] = prompt("Name of victim " + i);
	victims.phone[i] = prompt("Phone number of victim " + i);
	victims.street[i] = prompt("Street of victim " + i);
}

var volunteers = {};
volunteers.number = prompt("How many volunteers do you wish to enter?");

volunteers.name = [];
volunteers.phone = [];
volunteers.street = [];

for(var i = 1; i <= volunteers.number; i++) {
	volunteers.name.push(prompt("Name of Volunteer" + i));
	volunteers.phone.push(prompt("Phone number of Volunteer" + i));
	volunteers.street.push(prompt("Street of Volunteer" + i));
}

alert("Number of people in need: " + victims.number + "\n" 
	+ "Number of volunteers: " + volunteers.number);

document.write("<h1>volunteers</h1><ul>");
volunteers.name.forEach(function(name) {
	document.write("<li>" + name + "</li>");
});
document.write("</ul>");


document.write("<h1>victims</h1><ul>");
victims.name.forEach(function(name) {
	document.write("<li>" + name + "</li>");
});
document.write("</ul>");