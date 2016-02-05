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

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 

function stringCombinations(string) {
    var masterList = [];
    for (i in string) {
        masterList.push(string[i]);
        for (var counter = parseInt(i) + 2; counter <= string.length; counter++) {
            var start = parseInt(i);
            masterList.push(string.slice(start, counter));
        }
    }
    return masterList.toString();
}

stringCombinations('cats');




// 4. In language of your choice, write a routine that reverses a string in place

// First, a function that puts the first character at the end
function firstAtEnd(string) {
    var string = string + string[0];
    var string = string.slice(1, string.length);
    return string;
}


// Then, put the first character in before the last character;
string = string.slice(1, string.length - 1) + string[0] + string[string.length - 1];


// Combine these two expressions
function firstTwoAtEnd(string) {
    string = string + string[0];
    string = string.slice(1, string.length);
    string = string.slice(1, string.length - 1) + string[0] + string[string.length - 1];
    return string;
}


// add a third, fourth
function firstFourToEnd(string) {
    string = string + string[0];
    string = string.slice(1, string.length);
    string = string.slice(1, string.length - 1) + string[0] + string[string.length - 1];
    string = string.slice(1, string.length - 2) + string[0] + string.slice(string.length - 2, string.length);
    string = string.slice(1, string.length - 3) + string[0] + string.slice(string.length - 3, string.length);
    return string;
}

// Finally, make a loop to finish it
function reverseString(string) {
    var totalChar = string.length -1;
    string = string + string[0];
    string = string.slice(1, string.length);
    string = string.slice(1, string.length - 1) + string[0] + string[string.length - 1];
    for (i = 2; i <= totalChar; i++) {
        string = string.slice(1, string.length - i) + string[0] + string.slice(string.length - i, string.length);
    }
    return string;
}
// It works!

//Now write a routine that reverses each word in a string
//(words are characters separated by spaces)

function wordReverser(sentence) {
    var foundAtPosition = 0;
    var lastIndex = 0;
    var newString = "";
    var reverser = function(string) {
        var totalChar = string.length -1;
        string = string + string[0];
        string = string.slice(1, string.length);
        string = string.slice(1, string.length - 1) + string[0] + string[string.length - 1];
        for (i = 2; i <= totalChar; i++) {
            string = string.slice(1, string.length - i) + string[0] + string.slice(string.length - i, string.length);
        }
        return string;  
    }
    
    while (foundAtPosition != -1) {
        foundAtPosition = sentence.indexOf(" ", foundAtPosition);
        if (foundAtPosition === -1) {
            var word = sentence.slice(lastIndex);
            word = word.trim();
            var reverseWord = reverser(word);
            newString = newString + ' ' + reverseWord;
        
        }
        else if (foundAtPosition != -1) {
            var word = sentence.slice(lastIndex, foundAtPosition);
            word = word.trim();
            var reverseWord = reverser(word);
            newString = newString + ' ' + reverseWord;
            lastIndex = foundAtPosition;
        }

    
        if (foundAtPosition != -1) {
            foundAtPosition ++;
        }
    
    }
    
    newString = newString.trim();
    return newString;
}


//Now write a routine that reverses the order of words in a string