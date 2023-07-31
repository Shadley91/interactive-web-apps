// scripts.js

const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Edit below line

const statusElement0 = document.querySelector("#book1 .status");
const reserve0 = document.querySelector("#book1 .reserve");
const checkout0 = document.querySelector("#book1 .checkout");
const checkin0 = document.querySelector("#book1 .checkin");

const statusElement1 = document.querySelector("#book2 .status");
const reserve1 = document.querySelector("#book2 .reserve");
const checkout1 = document.querySelector("#book2 .checkout");
const checkin1 = document.querySelector("#book2 .checkin");

const statusElement2 = document.querySelector("#book3 .status");
const reserve2 = document.querySelector("#book3 .reserve");
const checkout2 = document.querySelector("#book3 .checkout");
const checkin2 = document.querySelector("#book3 .checkin");

checkin0.style.color = "black";
statusElement0.style.color = STATUS_MAP.overdue.color;
reserve0.disabled = STATUS_MAP.overdue.canReserve;
checkout0.disabled = STATUS_MAP.overdue.canCheckout;
checkin0.disabled = STATUS_MAP.overdue.canCheckIn;

checkin1.style.color = "black";
statusElement1.style.color = STATUS_MAP.reserved.color;
reserve1.disabled = STATUS_MAP.reserved.canReserve;
checkout1.disabled = STATUS_MAP.reserved.canCheckout;
checkin1.disabled = STATUS_MAP.reserved.canCheckIn;

checkin2.style.color = "black";
statusElement2.style.color = STATUS_MAP.shelf.color;
reserve2.disabled = STATUS_MAP.shelf.canReserve;
checkout2.disabled = STATUS_MAP.shelf.canCheckout;
checkin2.disabled = STATUS_MAP.shelf.canCheckIn;
