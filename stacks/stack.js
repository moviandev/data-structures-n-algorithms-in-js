// stack
// Arrays is the best way of creating stacks that's why arrays already has all the functions
// used in stacks (IN JS)
// like push, pop, ppek, length || size

let letters = []; // this is ou stack
let word = "racecar";
let reverseWord = "";

// put the letters of word into stack
for (let i = 0; i < word.length; i++) letters.push(word[i]);

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) reverseWord += letters.pop();

if (reverseWord === word) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} isn't a palindrome`);
}
