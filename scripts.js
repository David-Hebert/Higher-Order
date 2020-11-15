let firstMapArr = [3, 4, 235, 6, 12];

const addTwo = (array) => {
    let addTwoArr = []
    for (let i = 0; i < array.length; i++) {
        let mathResult = array[i] + 2;
        addTwoArr.push(mathResult);
        console.log(array);
    }
};



let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenFilter = (array) => {
    let evenArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenArray.push(array[i])
        }
    }
    return evenArray;
}

evenFilter(numberArray);


// reduce method from scratch

function reduce(array, combiningFunction, startingIndex) {
    let currentIndex = startingIndex
    for (let element of array) {
      currentIndex = combiningFunction(currentIndex, element);
    }
    return currentIndex;
  }
  
  console.log(reduce([1,2,3,4], (a, b) => a + b, 0));
  // 10 

  // reduce method .reduce() is called on an array and accepts a callback function that is a reducer, or a combining function that performs the operation (summation, or totaling) and it accepts four parameters, two necessary (accumulator and current value) and two optional (starting index and array its being performed upon)

array = [1, 2, 3, 4]

// ES5 Syntax

array.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
}, 0)

// ES6 Arrow Function Syntax

array.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0 )

