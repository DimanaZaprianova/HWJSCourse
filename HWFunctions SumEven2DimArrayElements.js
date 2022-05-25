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
