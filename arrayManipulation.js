// Task 1: 
// Create a JavaScript file named arrayManipulation.js. 
// Write a function processArray that:
//- Takes an array of numbers as an argument. 
//- Returns a new array where each even number is squared and each odd number 
// is tripled.

//Task 2:
//In arrayManipulation.js, add a function formatArrayStrings. 
//The function takes two arrays as arguments: 
// - An array of strings. 
// - An array of numbers processed by processArray. 
// The function modifies each string based on its corresponding number: 
// -  Capitalize the entire string if the number is even. 
// -  Convert the string to lowercase if the number is odd.



let processArray = (nums = []) =>{
    for (let i=0; i<nums.length; i++ ) {
        if ( nums[i] % 2 == 0){
            nums[i] = nums[i] **2 ;
        }else{
            nums[i] = nums[i] ** 3
        }
    }
    return nums
}


// console.log(processArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// let formatArrayStrings = (strArray = [], processedNums = processArray(processedNums)) => {
//     processArr = []
//     for (let i = 0; i < strArray.length; i++) {
//         if (processedNums[i] % 2 == 0) {
//             processArr[i] = strArray[i].toUpperCase();
//         } else {
//             processArr[i] = strArray[i].toLowerCase();
//         }
//         return processArr
//      }
// }
let formatArrayStrings = (strArray = [], processedNums = processArray(processedNums)) => {
    processArr = []
    for (let i = 0; i < strArray.length; i++) {
        if (processedNums[i] % 2 == 0) {
            processArr[i] = strArray[i].toUpperCase();
        } else {
            processArr[i] = strArray[i].toLowerCase();
        }
    }
    return processArr;
}



let inputNums = [1, 2, 3, 4, 5,]
let names = ["Kofi", "Allison", "Sandra", "Selorm", "Rahim"]


console.log(formatArrayStrings(names, inputNums))


module.exports = formatArrayStrings
