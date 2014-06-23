var phoneNumber = prompt("Please enter your phone number with dashes");
if(phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-") {
	alert("Your phone number seems to be valid.");
}
else {
	alert("Error");
}
var birthDate = prompt("Please enter your birthdate with the format xx/xx/xx");
if(birthDate.charAt(2) === "/" && birthDate.charAt(5) === "/") {
	alert("your birthday seems to be good.");
}
else {
	alert("Error");
}
var postalCode = prompt("Please enter your postal code");
if(postalCode.length === 5 || (postalCode.charAt(5) === "-" && postalCode.length === 10)) {
	alert("Your postal code seems good.");
}
else {
	alert("Error");
}
var state = prompt("Please enter your state");
if(state.length === 2 && state === state.toUpperCase()) {
	alert("Your state is real, I think.");
}
else {
	alert("Error");
}
var married = prompt("Are you married?");
if(married.toLowerCase() === "yes") {
	alert("You are married");
}
else {
	alert("Error");
}