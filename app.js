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
    var inputText = document.querySelector('.box');
    var inputarr = inputText.value.reverse();
   var reversed = document.querySelector('p');
    reversed.textContent = inputarr;

}
//alert(reverseString(prompt('Enter a word, so we can revese it :d')));

///////////////////////////////////////////////////////
//? CHALLENGE 2 : VALIDATE A PALINDROME
//* Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPlindrome
// ('hello') === false

/*
function isPalindrome(str) {
     if(str.split('').reverse().join('') === str) {
         console.log (true);
     } else {
         console.log (false);
     }
}
isPalindrome('racecar');
*/




function verify() {
    var inputText1 = document.querySelector('.two');
    var inputarr1 = inputText1.value.split('').reverse().join('');
   var trueOrFalse = document.querySelector('.palindrome');
   trueOrFalse.textContent = (inputarr1 === inputText1.value);
}

//? CHALLENGE 4 : CAPITALIZE LETTERS
//* Return a string with the first letter of every word capitalized

/*
function capitalizeLeters(str) {
    const strArr = str.toLowerCase().split(' ');

    for(i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0,1).toUpperCase() +
        strArr[i].substring(1);
    }
    return strArr.join(' ');

}

console.log(capitalizeLeters('i loVe javAscrIpt'));
 */


 /////////////////////////////////////////
//! Es6

function capitalizeLetters(str) {
    return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    
    .join(' ');
}



////////////////////////////////////////////////

function capital() {
    
    var inputText2 = document.querySelector('.three');
    var inputarr2 = capitalizeLetters(inputText2.value);
    
   var capLetter = document.querySelector('.capital-leter');
     if(capLetter) {
        capLetter.textContent = inputarr2;
     }
   
}

////////////////////////////////////////////////////////////
//? CHALLENGE 5: MAX CHARACTER
//* Return the character that is most common in a string

function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function(char){
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });
    for(let char in charMap) {
       if(charMap[char] > maxNum) {
           maxNum = charMap[char];
           maxChar = char;
       }
    }
    return [maxChar, maxNum + ' times'] ;
}
function max() {
    
    var inputText3 = document.querySelector('.four');
    var inputarr3 = maxCharacter(inputText3.value);
    
   var maxCh = document.querySelector('.max-char');
     if(maxCh) {
        maxCh.textContent = 'The most frequent letter is: '+ inputarr3;
     }
   
}
////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//? CHALLENGE 6 : FIZZBUZZ
// * Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number , print  
//! Fizz
//* , for multiples of 5 print
//! Buzz
//* For numbers which are multiples of both 3 and 5, print
//! FIZZBUZZ

function fizzBuzz() { 
    for(let i = 1; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0 && i % 5 !== 0) {
            console.log('Fizz')
        } else if(i % 3 !== 0 && i % 5 == 0) {
            console.log('Buzz')
        }else {
            console.log(i);
        }
     
    }
}
//fizzBuzz();


/////////////////////////////////////////////////////
// ? CHALLENGE 7 LONGEST WORD
//* Return the longest word a string
//* IF more than one longest word pt in an array


function longestWord(sen) {
   //create filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
   // sort by length 
   const sorted = wordArr.sort(function(a,b) {
       return b.length - a.length;
   });

   //If multiple wors, put in array
   const longWordArr = sorted.filter(function(word){
    return word.length === sorted[0].length;
   });

   return (longWordArr)
}


function longWo() {
    
    var inputText4 = document.querySelector('.five');
    var inputarr4 = longestWord(inputText4.value);
    
   var longest = document.querySelector('.long-word');
     if(longest) {
        longest.textContent = 'The longest word is : '+ inputarr4;
     }
   
}

































