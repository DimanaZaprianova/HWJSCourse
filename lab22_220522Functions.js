// // ***********************
// // Function Declarations:
// // ***********************
// // Дефиниция на функция без параметри, върнатия резултат е 'undefined'
// function welcomePrompt () {
//     var name = console.log("Здравейте! Бихте ли се представили?","моля, въведете Вашето име тук");
//     console.log("Добре дошли на борда, " + name + "!");
// }

// // Дефиниция на функция с 1 параметър, върнатия резултат е 'undefined'
// function welcome(name){
//     alert("Добре дошли на борда, " + name + "!");
// }

// // Дефиниция на функция с 1 параметър, и връщане на явен резултат
// function isЕven(x){
//     if( x % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// // Дефиниция на функция с 1 параметър, върнатия резултат е 'undefined'
// function conditionalStatemens(age){
//     var status;
//     if (age > 19) {
//         status = "adult";
//     } else if ( age < 19 && age >13) {
//         status = "teen";
//     }else {
//         status = "child"
//     }

//     console.log(status);
// }

// // Дефиниция на функция с 2 параметъра, върнатия резултат е 'undefined'
// function sum(x,y){
//     var total = x+y;
//     alert("Сумата е "+total);
// }

// // Дефиниция на функция с 2 параметъра, и връщане на явен резултат
// function sum(x,y){
//     var total = x+y;
//     return total;
// }

// // ***********************
// // Function Variable:
// // ***********************
// // Името на функцията е променлива, чиято стойност (а function object) можем да присвоим на друга променлива:
// var sumVar = sum;
// console.log( "sumVar(3,4) = ", sumVar(3,4) );


// // ***********************
// // Function Expression:
// // ***********************
// // Можем да дефинираме една функция и чрез израз:
// var sumVarNew = function(x,y){
//     var total = x+y;
//     return total;
// }; //тук трябва да сложим ';'
// console.log( "sumVarNew(3,4) = ", sumVarNew(3,4) );

// welcomePrompt ();
// conditionalStatemens(45);

// // Variables Shadowing - Examples
// var a = 3;

// function foo(a) {
//     // тук параметъра а "засенчва" глобалната променлива а ;
//     console.log("a in foo(): ", a);
// }

// foo(2);
// console.log("a in global:", a);

// TASK: преди да пуснете програмата си запишете какъв очаквате да е изхода от програмата и след това сравнете.

// var x = 1;

// var foo = function() {
// 	var x = 2;

// 	let bar = function(x) {
// 		console.log("x in bar = ", x)
// 	};
// 	bar(99);

// 	console.log("x in foo = ", x);
// }

// foo();
// console.log("x in main = ", x);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
// 1st TASK: 
// //да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени дължина и ширина:

// // ---> YOUR CODE HERE <---

// function calcRectangleArea(w,h){
//     let result = w*h;
//     return result;
// };

// // !!! Do not change code bellow
// // TEST:
// let rectWidth = 6;
// let rectHeight = 3;

// let area = calcRectangleArea(rectWidth, rectHeight);

// console.log(`The area of rectangle is: ${area}`);

// // EXPECTED RESULT:
// // The area of rectangle is: 18

// // дефиниция на функция, която логва единствено четните елементи на подаденият й масив:
// function logArrayEvenElements(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] % 2 === 0) {
// 			console.log(arr[i]);
// 		}
// 	}
// }

// let numbers = [2, -4, 5, 3, 9, 0, 1];
// logArrayEvenElements(numbers);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
// 2nd TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---

// function findMaxEven(arr) {
//    let maxEven = -Infinity; 
//    for (let i = 0; i < arr.length; i++){
        
//         if (arr[i]>maxEven && arr[i]%2===0) {
//             maxEven = arr[i];
//         };
//     };
//     return maxEven;
// }

// // TEST
// let numbers = [2, -4, 5, 3, 9, 0, 1];
// let max = findMaxEven(numbers);
// console.log(`The max even of ${numbers} is ${max}`);



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
// 3rd TASK:
// // TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.
// // ---> YOUR CODE HERE <---

// function getHighestScoreIndex(arrScore) {
//     let maxScore = -Infinity; 
//     for (let i = 0; i < arrScore.length; i++){       
//             if (arrScore[i]>maxScore) {
//                 maxScore = i;
//             };
//         };
//     return maxScore; 
// };
   
// // TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// // ---> YOUR CODE HERE <---

// let students = ["Ivan", "Pesho", "Maria"];
// let scores = [5, 4, 6];
// let index = getHighestScoreIndex(scores);

// console.log(`${students[index]} has the higest score: ${scores[index]}`);

// // expected output
// // Maria has the higest score: 6


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  4th TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

// ---> YOUR CODE HERE <---
function SumEven2DimArrayElements(dimArr){
    let accum = 0;
    for ( let i  =0; i < dimArr.length; i++) {
        for ( let j=0; j<dimArr[i].length; j++){
            if (dimArr[i][j]%2===0){
                accum = accum + dimArr[i][j];
            }
        }
    }
    return accum;
};
// TEST:
let arr = [
	[1,2,3],
	[4,5,6]
];

let sum = SumEven2DimArrayElements(arr);
console.log(sum);

// expected output: 12


