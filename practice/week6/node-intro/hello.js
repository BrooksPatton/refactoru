#!/usr/bin/env node
console.log('The arguments are: ', process.argv.join(', '))

var hello = function() {
	console.log('hello world');
};

module.exports = hello;