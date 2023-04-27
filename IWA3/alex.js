// alex.js

var firstname = "Alex";
var surname = "Naidoo";
export var role = "Head of Marketing";

var display = firstname + " " + surname + " (" + role + ")";
document.querySelector("#alex").innerHTML = display;
