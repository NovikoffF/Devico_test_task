const fs = require("fs");

function countLegs(filePath) {
  let legs = 0;
  const animals = JSON.parse(fs.readFileSync(filePath));
  if (animals.pigs) {
    legs += animals.pigs * 4;
  }
  if (animals.chikens) {
    legs += animals.chikens * 2;
  }
  if (animals.cows) {
    legs += animals.cows * 4;
  }
  return legs;
}
const result = countLegs("animals.json");
console.log(`Total legs count ${result}`);
