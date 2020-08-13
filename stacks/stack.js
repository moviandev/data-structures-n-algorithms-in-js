// stack structures
// Arrays is the best way of creating stacks that's why arrays already has all the functions
// used in stacks
// like push to push someting on the top of the stack, pop to remove something in the bottom of the stack, peek to see what's on the top of stack, length || size to see the size of it

let letters = []; // this is our stack
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
