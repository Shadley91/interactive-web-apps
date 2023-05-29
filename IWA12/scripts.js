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

const statusElement0 = document.querySelector(".status");
const reserve0 = document.querySelector(".reserve");
const checkout0 = document.querySelector(".checkout");
const checkin0 = document.querySelector(".checkin");

const statusElement1 = document.querySelector(".status");
const reserve1 = document.querySelector(".reserve");
const checkout1 = document.querySelector(".checkout");
const checkin1 = document.querySelector(".checkin");

const statusElement2 = document.querySelector(".status");
const reserve2 = document.querySelector(".reserve");
const checkout2 = document.querySelector(".checkout");
const checkin2 = document.querySelector(".checkin");

checkin0.style.color = "none";
statusElement0.style.color = STATUS_MAP.overdue.color;
reserve0.enabled = STATUS_MAP.overdue.canReserve;
checkout0.enabled = STATUS_MAP.overdue.canCheckout;
checkin0.disabled = STATUS_MAP.overdue.canCheckIn;

checkin1.style.color = "none";
statusElement1.style.color = STATUS_MAP.reserved.color;
reserve1.disabled = STATUS_MAP.reserved.canReserve;
checkout1.enabled = STATUS_MAP.reserved.canCheckout;
checkin1.disabled = STATUS_MAP.reserved.canCheckIn;

checkin2.style.color = "none";
statusElement2.style.color = STATUS_MAP.shelf.color;
reserve2.enabled = STATUS_MAP.shelf.canReserve;
checkout2.enabled = STATUS_MAP.shelf.canCheckout;
checkin2.disabled = STATUS_MAP.shelf.canCheckIn;
