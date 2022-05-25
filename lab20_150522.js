// /* ------ Пример за изполване на логически оператори като 
// <strong>short-circuit --------*/

// var x = 42;
// var y = 10;

// // ако е вярно че x е четно , то изпиши в конзолата 'X e четно!':
// (x%2===0) && console.log("X e четно!");

// // задаване на стойност по подразбиране: 
// let userName;
// userName = userName || 'Anonymous';
// console.log(`Hello, ${userName}`)

// console.log("Evaluation of Truth Values for different types:")
// console.log( "0 == false: ", 0 == false);
// console.log( "0 && 2: ", 0 && 2);
// console.log( "0 && '': ", 0 && '');

// console.log( "'' == false: ", '' == false);
// console.log( "0 || 2: ", 0 || 2);
// console.log( "0 || '': ", 0 || '');

// console.log( "false == 'some string': ", false == 'some string' );

// var a = 1, b = 1;
// console.log( a++ + ++a); 	// ?
// console.log( ++b + b++); 	// ?
// console.log( a + b); 			// ?

// let userTown = "Париж";
// if(userTown ==="София"){
//     console.log("Здравей!")
// }
// else if(userTown === "Париж"){
//     console.log("Salut!")
// }
// else {
//     console.log("Hi!")
// };

// var crownHeight = 6;
// var boleHeight = 2;
// var boleWidth = 3;
// var spaceCount;


// // print the crown:
// for(var i = 1; i<=crownHeight; i++){
//     spaceCount = Math.floor(crownHeight) - i;
//     console.log( "*".repeat(spaceCount)+"*".repeat(i*2-1) );		
// }

// // print the bole:	
// spaceCount = Math.floor(((crownHeight*2-1)-boleWidth)/2);
// for(var i = 1; i<=boleHeight; i++){		
//     console.log( "*".repeat(spaceCount)+"*".repeat(boleWidth));		
// }


// // Машината си "намисля" число:
// var machineNumber = Math.round(Math.random() * 10);
// console.log(`machineNumber: ${machineNumber}`);

// // Потребителя "въвежда" число:
// var userNumber = Math.round(Math.random() * 10);
// console.log(`userNumber: ${userNumber}`);

// while(userNumber != machineNumber){
//   // Потребителя "въвежда" ново число:
//   userNumber = Math.round(Math.random() * 10);
//   console.log(`new userNumber: ${userNumber}`);
// }

// Машината си "намисля" число:
var machineNumber = Math.round(Math.random() * 10);
console.log(`machineNumber: ${machineNumber}`);

do{
  // Потребителя "въвежда" число:
  userNumber = Math.round(Math.random() * 10);
  console.log(`userNumber: ${userNumber}`);
} while(userNumber != machineNumber)
