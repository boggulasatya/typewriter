
const sentence = "hello world";

let delay = 0;

for (const char of sentence) {

setTimeout(() => {

process.stdout.write(char + "\n");

}, delay);

delay += 50;   
  
}

setTimeout (() => {
  process.exit();
}, delay + 100);

console.log("\n");