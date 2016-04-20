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
