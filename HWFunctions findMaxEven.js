
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
// 2nd TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---

function findMaxEven(arr) {
   let maxEven = -Infinity; 
   for (let i = 0; i < arr.length; i++){
        
        if (arr[i]>maxEven && arr[i]%2===0) {
            maxEven = arr[i];
        };
    };
    return maxEven;
}

// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);
console.log(`The max even of ${numbers} is ${max}`);
