
const sentence = "hello world";

let delay = 0;

for (const char of sentence) {

setTimeout(() => {

process.stdout.write(char + "\n");

}, delay);

delay += 50;   
  
}
setTimeout (() => {
console.log("\n");
}, delay);