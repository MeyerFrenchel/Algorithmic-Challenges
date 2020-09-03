////////////////////////////////////////
// ? CHALLENGE 1 : REVERSE A STRING
//* RETURN A STRING IN REVERSE 
// EX. reverseString('hello') == 'olleh'
/!//////////////TODO

// !reverse method
 /*
function reverseString(str) {
   return str
   .split('')
    .reverse()
   .join('');
}

let revString = '';
for(let i = str.length -1; i >= 0; i--) {
    revString = revString + str[i];
}
*/
////////////////////////////
// ! ES6 forEach
/*
function reverseString(str) {
let revString = '';
str.split('').forEach(char => revString = char + revString);
return revString ; 
}

console.log(reverseString(prompt('Enter a word so I can reverse it')));

//////////////////////////////
 ! reduce
function reverseString(str) {
    return str.split('').reduce((revString, char) =>
      char + revString, '');

}
console.log(reverseString(prompt('Enter a word so I can reverse it')));
*/

////////////////////////////////////
//! DOM HTML user input revers

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};
function rev() {
    var inputText = document.getElementById('box');
    var inputarr = inputText.value.reverse();
   var reversed = document.querySelector('p');
    reversed.textContent = inputarr;

}









//alert(reverseString(prompt('Enter a word, so we can revese it :d')));