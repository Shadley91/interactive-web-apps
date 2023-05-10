const leoName = "Leo";
const leoSurname = "Musvaire";
const leoBalance = "-9394";

const sarahName = "Sarah";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";

const divider = "----------------------------------";

// Only change below this line
const randFormat = Intl.NumberFormat("en-ZA");

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance);
const leo = `${leoName} ${leoSurname} R${randFormat.format(
  Math.abs(leoBalance)
)} `;
const sarah = `${sarahName} ${sarahSurname} R${randFormat.format(
  Math.abs(sarahBalance)
)} `;
const total = "Total amount owed:" + "R" + Math.abs(owed).toFixed(2);
const result =
  leo + "\n" + sarah + "\n" + divider + "\n" + total + "\n" + divider;

console.log(result);
