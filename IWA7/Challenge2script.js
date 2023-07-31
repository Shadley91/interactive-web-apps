const nickName = "Timmy";
const firstName = "Timothy";

if (!nickName && !firstName) {
  console.log("Good Morning");
} else {
  console.log("Good Morning", nickName || firstName);
}

/* The reason for it logging both variables instead of the name is because it is evaulating both variables.*/
