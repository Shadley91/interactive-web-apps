const date = 2050;
const statusA = "student";
const statusB = "parent";
let count = 0;

if (true) {
  //console.log("January", "New Year’s Day");
  //console.log("March", "Human Rights Day");
  //console.log("April", "Family Day");
  //console.log("April", "Freedom Day");
  count = count + 4;

  if (true) {
    const statusA = count + 1;
    //console.log("June", "Youth Day");
    count = count + 1;
  }

  //console.log("August", "Women’s Day");
  //console.log("September", "Heritage Day");
  //console.log("December", "Day of Reconciliation");
  count = count + 3;

  if (true) {
    const statusB = count + 1;
    //console.log("December", "Christmas Day");
    count = count + 1;
  }

  const statusA = count + 1;
  const statusB = count + 1;
  //console.log("December", "Day of Goodwill");
}

console.log("Your status is:", statusB);
console.log("The year is:", date);
console.log("The total holidays is:", count);
