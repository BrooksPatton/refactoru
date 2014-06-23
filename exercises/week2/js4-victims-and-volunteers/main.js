var stop = true;
var victims = {};
victims.name = [];
victims.phone = [];
victims.street = [];
var volunteers = {};
volunteers.name = [];
volunteers.phone = [];
volunteers.street = [];

while(stop === true) {
	victims.name.push(prompt("Name of victim"));
	victims.phone.push(prompt("Phone number of victim"));
	victims.street.push(prompt("Street of victim"));
	stop = confirm("Would you like to enter another victim?");
}

stop = true;
while(stop === true) {
	volunteers.name.push(prompt("Name of Volunteer"));
	volunteers.phone.push(prompt("Phone number of Volunteer"));
	volunteers.street.push(prompt("Street of Volunteer"));
	stop = confirm("Would you like to enter another Volunteer?");
}



alert("Number of people in need: " + victims.name.length + "\n" 
	+ "Number of volunteers: " + volunteers.name.length);

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