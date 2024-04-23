/*
Implement a function to flatten a nested JSON object, i.e., convert it into a 
flat JSON object where each key is a dot-separated path to a leaf node in 
the original object
*/
function flatten(obj, parentKey = "") {
    let flattened = {};
    for (let key in obj) {
        let newKey = parentKey ? parentKey + "." + key : key;
        if (typeof obj[key] === "object") {
            flattened = { ...flattened, ...flatten(obj[key], newKey) };
        } else {
            flattened[newKey] = obj[key];
        }
    }
    return flattened;
}

const obj = {
    "one": 1,
    "two": {
       "three": 3
    },
    "four": {
       "five": 5,
       "six": {
          "seven": 7
       },
       "eight": 8
    },
    "nine": 9
 };
console.log(flatten(obj));
