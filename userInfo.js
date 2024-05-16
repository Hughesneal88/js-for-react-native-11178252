// Task 3: 
//Convert the string to lowercase if the number is odd. 
//Create a file userInfo.js. 
//Write a function createUserProfiles that:
// - Takes an array of names and the array of modified names from Task 2.
// - Returns an array of objects, each containing originalName, modifiedName, 
// and id (auto-incremented starting from 1).

const formatArrayStrings = require("./arrayManipulation.js")

let inputNums = [1, 2, 3, 4, 5,]
let names = ["Kofi", "Allison", "Sandra", "Selorm", "Rahim"]

modNames = formatArrayStrings(names, inputNums)

let createUserProfiles = (names, modifiedNames) => {
    if (!names || !modifiedNames) {
        throw new Error('Both names and modifiedNames arrays are required.');
    }
    let userProfiles = [];
    for (let i = 0; i < names.length; i++) {
        let userProfile = {
            id: i+1,
            originalName: names[i],
            modifiedName: modifiedNames[i]
        }
        userProfiles.push(userProfile);
    }
    return userProfiles;

}

console.log(createUserProfiles(names, modNames))