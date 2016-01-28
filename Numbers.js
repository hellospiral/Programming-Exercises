numberArray = [23,9,14,2,28,19,3,15,9,25,2,4,9]


// Find the mean
var total = 0;

for (x in numberArray) {
total = total + numberArray[x];
}

var mean = total / numberArray.length;

console.log(mean)




// Sort the array
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



// Find the mediannumber
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


