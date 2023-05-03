const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

let shipping,
  currency,
  shoes,
  toys,
  shirts,
  batteries,
  pens,
  customers,
  locationA,
  locationB,
  locationC;

if (locationC === "RSA") {
  shipping = 400;
  currency = "R";
}

if (locationA === "NAM") {
  shipping = 600;
} else {
  shipping = 800;
}

shoes = 300 * 1;
toys = 100 * 5;
shirts = 150 * NONE_SELECTED;
batteries = 35 * 2;
pens = 5 * NONE_SELECTED;

shipping = null;
currency = "R";

if (
  shoes + batteries + toys > 1000 &&
  customers === "1" &&
  location === "RSA"
) {
  shipping = 0;
} else {
  shipping = 400 || 600 || 800;
}

if (shipping === 0 && customers === "2") {
  console.log(FREE_WARNING);
}

if (locationB === "NK") {
  console.log(BANNED_WARNING);
}

console.log("price", currency, shoes + batteries + toys + shipping);
