////////////////////////////////////////
// ? CHALLENGE 1 : REVERSE A STRING
//* RETURN A STRING IN REVERSE 
// EX. reverseString('hello') == 'olleh'
/!//////////////TODO

// !reverse method
 
function reverseString(str) {
   return str
   .split('')
    .reverse()
   .join('');
}




////////////////////////////////////
// String.prototype.reverse = function() {
//     return this.split('').reverse().join('');
// };
// function rev() {
//     var inputText = document.getElementById('box');
//     var inputarr = inputText.value.reverse();
//    var reversed = document.querySelector('p');
//     reversed.textContent = inputarr;

// }









//alert(reverseString(prompt('Enter a word, so we can revese it :d')));