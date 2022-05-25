// let arr = [1,2,2];
// for (let index = 0; index < ma.length; index++) {
//     const element = array[index];
    
// }

// let numbers = [-2, 3, 7, 8, -1, 4, 2];
// >>>>>>>>> write your code bellow:

// var sum = 0;
// for ( var x = 0; x < numbers.length; x++ ){
// 	if (numbers[x]>0 && numbers[x]%2===0){       
//         sum = sum + numbers[x];
// 	};
// };
// console.log("sum = " + sum);

// const numbersArr = [1, 6, -3, 5, 2, -8, 0, 4, 3];
// let evenNums = [];
// let oddNums = [];
// for ( var x = 0; x < numbersArr.length; x++ ){
//     	if (numbersArr[x]!==0 && numbersArr[x]%2===0){       
//             evenNums.push(numbersArr[x]);
//         };
// };
// for ( var x = 0; x < numbersArr.length; x++ ){
//     if (numbersArr[x]!==0 && numbersArr[x]%2!==0){       
//         oddNums.push(numbersArr[x]);
//     };
// };
// console.log(`The new array with even numbers is: evenNums [${evenNums}]`);
// console.log(`The new array with odd numbers is: oddNums [${oddNums}]`);


// var rulers = [
// 	["асПАРуХ",681, 700 ],
// 	["тЕРвеЛ", 700,718 ],
// 	["СеВаР", 738,753],
// 	["телЕРИГ", 766,777],
// 	["каРДАм", 777, 803],
// 	["крум", 803,814 ],
// 	["ОмурТАг",814,831],
// ];

// // >>>>>>>>>>НАЧАЛО НА ВАШИЯ КОД >>>>>>>>>>
// for ( var x = 0; x < rulers.length; x++ ){
//     if (rulers[x][2]-rulers[x][1]> 15){
// console.log(`${toCamelCaseCyr(rulers[x][0])} е управлявал ${rulers[x][2]-rulers[x][1]} години.`);
//    };
// };

// // <<<<<<<<<< КРАЙ НА ВАШИЯ КОД <<<<<<<<<<<<<

// // Очакван резултат,в конзолата:
// // Аспарух е управлявал 19 години.
// // Тервел е управлявал 18 години.
// // Кардам е управлявал 26 години.
// // Омуртаг е управлявал 17 години.

// // do not modify!
// function toCamelCaseCyr(str) {
// return str.toLowerCase()
//                .replace(/(?:\b|^|[^а-яА-Я])([а-яА-Я])/g, (all, chr) => chr.toUpperCase());
// }

// {
// 	var x = 2;           // x e глобална променлива
// 	let y = 4;           // y e видима само в текущия блок
// 	const alpha = 2.34;  // alpha e видима само в текущия блок
// }

// console.log(`x=${x}`);          // x=2
// // console.log(`y=${y}`);          // error: y is not defined
// console.log(`alpha=${alpha}`);

// function caller(callback){
// 	console.log("caller will call the callback:")
// 	callback();
//   }
  
//   function callback1(){
// 	console.log("I'm the callback1 function!")
//   }
  
//   function callback2(){
// 	console.log("I'm the callback2 function!")
//   }
  
  
//   caller(callback1);
//   caller(callback2);

//   function caller(f){
// 	console.log("1")
// 	f();
//   }
  
//   function callback(){
// 	console.log("2")
//   }
  
//   console.log("Feeding the caller() with function declaration")
//   caller( callback );
  
//   console.log("Feeding the caller() with function execution")
//   caller( callback() );

(function(){
	console.log("I am in nowhere, but I exist and work!");
  })();