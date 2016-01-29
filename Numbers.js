numberArray = [23,9,14,2,28,19,3,15,9,25,2,4,9]


// Exercise 1: Find the mean
var total = 0;

for (x in numberArray) {
total = total + numberArray[x];
}

var mean = total / numberArray.length;

console.log(mean)


// Exercise 2: Find the median number

// First, sort the array
function sort(array) {
    for (x in array) {
        y = parseInt(x) + 1;
        if (array[x] > array[y]) {
            var b = array[x];
            var a = array[y];
            array[x] = a;
            array[y] = b;
            sort(array);
  }
 }
    return array;
}

sort(numberArray);

// Now, put sort function in getMedian function.
function getMedian(numbers) {
    sort(numbers);
    var median;
    noRepeats = [];
    for (x in numbers) {
      y = parseInt(x) + 1;
      if (numbers[x] !== numbers[y]) {
        noRepeats.push(numbers[x]);
  }
 }
    if ((noRepeats.length % 2) === 0) {
        // median will be the mean of the two central numbers
        centralB = noRepeats[Math.round((noRepeats.length - 1) / 2)];
        centralA = noRepeats[Math.round((noRepeats.length - 1) / 2) -1];
        median = (centralA + centralB) / 2;
      }
      
   else {
       // median will be the middle element of the sorted array
       median = noRepeats[Math.round((noRepeats.length -1) / 2)]
 }
    return median;
}

getMedian(numberArray);


// Exercise 3: Find the Mode; mode is the number that is repeated more often than any other number. In this case it is 9

numberArray = [23,9,14,2,28,19,3,15,9,25,2,4,9]

function findMode(array) {
// First, sort the array
    sort(array);
    var repeatObject = {};
    var counter = 0;
// Then, loop through the array and compare each element to its neighbor
    for (x in array) {
        y = parseInt(x) + 1;
// If the element matches its neighbor, increase the counter, and add the element and the value of the counter to the 'repeat' object
        if (array[x] === array[y]) {
            var element = array[x].toString();
            counter ++;
            repeatObject[element] = counter;      
        }
// When the repetitions of elements ends, reset the counter
        else {
            counter = 0;
            continue;
        }
    }
// Loop through the object to determine which element has the highest counter value
    var largest = 0;
    var indexOfLargest;
    for (var key in repeatObject) {
        if (repeatObject[key] > largest) {
            largest = repeatObject[key];
            indexOfLargest = key;
        }
    }
// return the answer as a string
    var answer = "The mode is " + indexOfLargest + ", it was repeated " + (repeatObject[indexOfLargest] + 1) + " times";
    return answer;
}



// Exercise 4: Find the range; range is the difference between the largest and lowest number. In this case largest is 28 and lowest is 2. So 28-2 is 26

numberArray = [23,9,14,2,28,19,3,15,9,25,2,4,9]

function findRange(array) {
    // First, find the largest
    var largest = 0;
    for (i in array) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    // Second, find the smallest
    var smallest = array[0];
    for (i in array) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }
    // Third, subtact smallest from largest
    range = largest - smallest;
    return range;      
}

findRange(numberArray);