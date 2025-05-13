const fs = require("fs");
const Y = Number(fs.readFileSync(0).toString().trim());

if (Y % 4 === 0) {
  if (Y % 100 === 0 && Y % 400 !== 0) {
    console.log(false);
  } else {
    console.log(true);
  }
} else {
  console.log(false);
}