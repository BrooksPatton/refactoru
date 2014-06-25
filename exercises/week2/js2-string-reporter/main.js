var word = prompt("Please enter any word");

alert("You entered the word " + word + "\n"
	+ "The number of characters in " + word + " = " + word.length + "\n"
	+ "The third character is " + word.charAt(2) + "\n"
	+ "The word in lowercase is: " + word.toLowerCase() + "\n"
	+ "The word in uppercase is: " + word.toUpperCase() + "\n"
	+ "The word in a sentence: " + "I really love the word " + word.toLowerCase() + "." + "\n"
	+ "The subword from the 2nd to the 4th character: " + word.slice(1, 4)
);