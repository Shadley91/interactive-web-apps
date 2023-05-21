const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

console.log(holidays.futureId || "ID {futureId} not created yet");

copied = holidays.christmas;
copied = { name: "X-mas" };
correctDate = new Date(copied.date);
correctDate.setHours(0, 0, 0);
correctDate.setMinutes = (0, 0, 0);
isEarlier = copied.date < holidays[6].date;
console.log("New date is earlier:", isEarlier < holidays[6].date);
if (isEarlier) {
  copied.date = correctDate;
}
console.log("ID change:", holidays[christmas].id === copied.id && copied.id);
console.log(
  "Name change:",
  holidays[christmas].name === copied.name || copied.name
);
console.log(
  "Date change:",
  holidays[christmas],
  Date.parse() !== copied.date || copied.date
);

const firstHolidayTimestamp = Math.min(
  Date.parse(holidays[0].date),
  Date.parse(holidays[1].date),
  Date.parse(holidays[2].date),
  Date.parse(holidays[3].date),
  Date.parse(holidays[4].date),
  Date.parse(holidays[5].date),
  Date.parse(holidays[6].date),
  Date.parse(holidays[7].date),
  Date.parse(holidays[8].date)
);

const lastHolidayTimestamp = Math.max(
  Date.parse(holidays[0].date),
  Date.parse(holidays[1].date),
  Date.parse(holidays[2].date),
  Date.parse(holidays[3].date),
  Date.parse(holidays[4].date),
  Date.parse(holidays[5].date),
  Date.parse(holidays[6].date),
  Date.parse(holidays[7].date),
  Date.parse(holidays[8].date)
);

const firstDay = new Date(firstHolidayTimestamp).getDate();
const firstMonth = new Date(firstHolidayTimestamp).getMonth() + 1;
const lastDay = new Date(lastHolidayTimestamp).getDate();
const lastMonth = new Date(lastHolidayTimestamp).getMonth() + 1;

console.log(`${firstDay}/${firstMonth}/${currentYear}`);
console.log(`${lastDay}/${lastMonth}/${currentYear}`);

const randomHoliday =
  holidays[Math.floor(Math.random() * Object.keys(holidays).length)];
console.log(randomHoliday.date);
