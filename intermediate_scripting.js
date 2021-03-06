/*
DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/
function pairElement(str) {
  var strArray = str.split("");
  var newArray = [];
  for (var i = 0; i < strArray.length; i++) {
    if (strArray[i] === "G") {
      newArray.push(["G", "C"]);
    }
    else if (strArray[i] === "C") {
      newArray.push(["C", "G"]);
    }
    else if (strArray[i] === "A") {
      newArray.push(["A", "T"]);
    }
    else if (strArray[i] === "T") {
      newArray.push(["T", "A"]);
    }
  }
  return newArray;
}

pairElement("GCG");


/*
Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
*/

function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  var newString;
  if (vowels.indexOf(str[0]) === -1) {
    if (vowels.indexOf(str[1]) !== -1) {
        newString = str.substring(1) + str[0] + "ay";
    }
    else {
        newString = str.substring(2) + str.substring(0, 2) + "ay";
    }
  }
  else {
    newString = str + "way";
  }
      return newString;
}

translatePigLatin("consonant");

/*
Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/
function myReplace(str, before, after) {
  if (before.charCodeAt(0) >= 65 && before.charCodeAt(0) <= 90) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  }
  var strArray = str.split(" ");
  for (var i = 0; i < strArray.length; i++) {
  if (strArray[i] === before) {
      strArray[i] = after;
    }
  }
  str = strArray.join(' ');
  return str;
}

myReplace("His name is Tom", "Tom", "john");

/*
Where art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
*/

function whereAreYou(collection, source) {
  var arr = [];
  var sourcekeys = Object.keys(source);
  
  if (sourcekeys.length === 1) {
    var sourceProp = sourcekeys[0];
    for (var i = 0; i < collection.length; i++) {
      if ((collection[i].hasOwnProperty(sourcekeys[0])) && (collection[i][sourceProp] === source[sourceProp])) {
        arr.push(collection[i]);
      }
    }
  }
  else if (sourcekeys.length === 2) {
    var sourceProp1 = sourcekeys[0];
    var sourceProp2 = sourcekeys[1];
    for (var i = 0; i < collection.length; i++) {
      if ((collection[i].hasOwnProperty(sourcekeys[0])) && (collection[i].hasOwnProperty(sourcekeys[1]))) {
        if (collection[i][sourceProp1] === source[sourceProp1] && collection[i][sourceProp2] === source[sourceProp2]) {
          arr.push(collection[i]);
        }  
      }
    }
  }
  
  return arr;
}

/*
Convert to Roman

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  var arr = (""+num).split("");
  var length = arr.length;
  
  var one = "I";
  var four = "IV";
  var five = "V";
  var nine = "IX";
  var ten = "X";
  var fourty = "XL";
  var fifty = "L";
  var nintey  = "XC";
  var oneHundred = "C";
  var fourHundred = "CD";
  var fiveHundred = "D";
  var nineHundred = "CM";
  var oneThousand = "M";
  
  var thousands = "";
  var hundreds = "";
  var tens = "";
  var ones = "";
  
  function getOnes(dig) {
    if (dig === 0) {
      ones += ones;
    }
    if (dig > 0 && dig < 4) {
      for (var i = 1; i <= dig; i++) {
        ones += one;
      }
    }
    if (dig == 4) {
      ones += four;
    }
    if (dig == 5) {
      ones += five;
    }
    if (dig > 5 && dig < 9) {
      ones += five;
      for (var i = 1; i <= dig -5; i++) {
        ones += one;
      }
    }
    if (dig == 9) {
      ones += nine;
    }
    return ones;
  }
  
 
  function getTens(dig) {
    if (dig === 0) {
      tens += tens;
    }
    if (dig > 0 && dig < 4) {
      for (var i = 1; i <= dig; i++) {
        tens += ten;
      }
    }
    if (dig == 4) {
      tens += fourty;
    }
    if (dig == 5) {
      tens += fifty;
    }
    if (dig > 5 && dig < 9) {
      tens += fifty;
      for (var i = 1; i <= dig - 5; i++) {
        tens += ten;
      }
    }
    if (dig == 9) {
      tens += nintey;
    }
  }
  
  function getHundreds(dig) {
    if (dig === 0) {
      hundreds += hundreds;
    }
    if (dig > 0 && dig < 4) {
      for (var i = 1; i <= dig; i++) {
        hundreds += oneHundred;
      }
    }
    if (dig == 4) {
      hundreds += fourHundred;
    }
    if (dig == 5) {
      hundreds += fiveHundred;
    }
    if (dig > 5 && dig < 9) {
      hundreds += fiveHundred;
      for (var i = 1; i <= dig -5; i++) {
        hundreds += oneHundred;
      }
    }
    if (dig == 9) {
      hundreds += nineHundred;
    }
    return hundreds;
  }
  
  function getThousands(dig) {
    if (dig === 0) {
      thousands += thousands;
    }
    if (dig > 0 && dig < 4) {
      for (var i = 1; i <= dig; i++) {
        thousands += oneThousand;
      }
    }
    return thousands;
  }
  
  //chech length of number and run required functions
   if (length === 1) {
    getOnes(arr[0]);
    return ones;
  }
  
  if (length === 2) {
    getTens(arr[0]);
    getOnes(arr[1]);
    return tens + ones;
  }
  
  if (length === 3) {
    getHundreds(arr[0]);
    getTens(arr[1]);
    getOnes(arr[2]);
    return hundreds + tens + ones;
  }
  
  if (length === 4) {
    getThousands(arr[0]);
    getHundreds(arr[1]);
    getTens(arr[2]);
    getOnes(arr[3]);
    return thousands + hundreds + tens + ones;
  }
  
}

convertToRoman(3999);


/*
Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  var total = 0;
  if (arguments[0][0] < arguments[0][1]) {
    for (var i = arguments[0][0]; i <= arguments[0][1]; i++) {
      total += i;
    }      
  }
  else {
    for (var x = arguments[0][1]; x <= arguments[0][0]; x++) {
      total += x;
    }  
  }

  return total;
}

/*
Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var newArr1 = [];
  var newArr2 = [];
  
  function contains1(value) {
    if (arr1.indexOf(value) === -1) {
      return value;
    }
  }
  
  function contains2(value) {
    if (arr2.indexOf(value) === -1) {
      return value;
    }
  }
  
  newArr1 = arr2.filter(contains1);
  newArr2 = newArr1.concat(arr1.filter(contains2));  
  return newArr2;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
