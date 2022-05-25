
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
// 3rd TASK:
// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.
// ---> YOUR CODE HERE <---

function getHighestScoreIndex(arrScore) {
    let maxScore = -Infinity; 
    for (let i = 0; i < arrScore.length; i++){       
            if (arrScore[i]>maxScore) {
                maxScore = i;
            };
        };
    return maxScore; 
};
   
// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---

let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];
let index = getHighestScoreIndex(scores);

console.log(`${students[index]} has the higest score: ${scores[index]}`);

// expected output
// Maria has the higest score: 6
