// 2. Write a JavaScript function that reverses a number
	
function reverseNumber(num) {
    var digits = (""+num).split("");
    var reversedArray = [];
    for (i in digits) {
        reversedArray.unshift(digits[i]);
    }
    return reversedArray;
}



// 2. Write a JavaScript function that checks whether a passed string is palindrome or not

// First, reverse the string
function reverseString(string) {
    var characters = string.split("")
    var reversedArray = [];
    for (i in characters) {
        reversedArray.unshift(string[i]);
    }
    var reversedString = reversedArray.join("");
    return reversedString;
}



// modified reverseString funciton to check for palindrome
function checkPalindrome(string) {
    var characters = string.split("")
    var reversedArray = [];
    for (i in characters) {
        reversedArray.unshift(string[i]);
    }
    var reversedString = reversedArray.join("");
    if (reversedString == string) {
        console.log(string + " is a palindrome!");
    }
    else {
        console.log(string + " is not a palindrome.");
    }
}