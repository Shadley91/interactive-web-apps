const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
const newTime = hourOfDay === 0 && minuteOfDay === 0;
let balance = undefined;
if (newTime) {
  const taxAsDecimal = parseInt(tax) / 100;
  const startingAfterTax = salary * (1 - taxAsDecimal);
  balance = startingAfterTax - transport - food - rent;
}
console.log(balance.toFixed(2));
