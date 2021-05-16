const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let size = 0;
let input_count = 0;
let random_array = [];
r1.on('line', (input) => {
  if (input_count == 0) {
    size = Number(input);
  } else {
    random_array.push(Number(input));
  }
  input_count++;
});

r1.on('close', (input) => {
  sorted_array = random_array.sort((a,b) => a-b);
  sorted_array.forEach( (item) => {
    console.log(item);
  });
});
