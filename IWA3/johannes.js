// johannes.js

var firstname = "Johannes";
var surname = "Potgieter";
export var role = "Intern";

var display = firstname + " " + surname + "(" + role + ")";
document.querySelector("#johannes").innerHTML = display;
