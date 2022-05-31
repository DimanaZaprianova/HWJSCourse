// let student1 = {
//     // properties:
//     "firstName" : "Pesho",
//     "surName" : "Petrov",
  
//     // methods
//     "greet": function() {
//       console.log(`Hello, I'm ${this.firstName}`);
//     }
//   };

//   student1.greet();
//     console.log(student1.firstName);


/*---------------------------------------------------------------- 
!!!!!!!! HELPER function to convert a string into CamelCased string:!!!!!!! 
----------------------------------------------------------------*/


// const toCamelCase = function(str) {		
// 	// get the first letter and make it UpperCased:
// 	let firstLetter = str.substr(0, 1).toUpperCase();

// 	// get the rest of the string and make it LowerCased:
// 	let rest = str.toLowerCase().substr(1);

// 	return firstLetter + rest;
// };

// // constructor function for creating student objects
// // when is called with "new" will auto-magically return the object
// function Student(fName, sName) {
// 	this.firstName = fName;
// 	this.surName = sName;	

// 	this.sayFullName = function() {
// 		console.log(
// 			toCamelCase(this.firstName) + " " + toCamelCase(this.surName)
// 		);
// 	};
// }

// // "factory" function for creating student objects
// // we explicitly create and return the object
// function studentFactory(fName, sName) {
// 	let obj = {};
// 	obj.firstName = fName;
// 	obj.surName = sName;

// 	obj.sayFullName = function() {
// 		console.log(toCamelCase(fName) + " " + toCamelCase(sName));
// 	};

// 	return obj;
// }

// // create students objects by literals:
// let student1 = {
// 	firstName: "MARia",
// 	surName: "petrova",

// 	sayFullName: function() {
// 		// we access the object properties prefexing them with "student1" or "this":
// 		console.log(toCamelCase(this.firstName) + " " + toCamelCase(this.surName));
// 	}
// };
// let student2 = {
// 	firstName: "petaR",
// 	surName: "ATANASOV",

// 	sayFullName: function() {
// 		// we access the object properties prefexing them with "student1" or "this":
// 		console.log(toCamelCase(this.firstName) + " " + toCamelCase(this.surName));
// 	}
// };

// // create student objects with the constructor function:
// let student3 = new Student("stoyan", "IVANOV");
// let student4 = new Student("maRINA", "hristova");

// // create student objects with the factory function:
// let student5 = studentFactory("VaSIL", "poPOV");
// let student6 = studentFactory("eliSAVETA", "mihajlova");

// // let's test the objects:
// student1.sayFullName();
// student2.sayFullName();
// student3.sayFullName();
// student4.sayFullName();
// student5.sayFullName();
// student6.sayFullName();


/*----------------------------------------------------------------
~~~~~~~~~~ Ist TASK ~~~~~~~~~~
Примери за обекти и конструктор
----------------------------------------------------------------*/

//  // конструктор за обекти от тип Patient:
//  function Patient( age, firstName, lastName ){
//   this.age = age;
//   this.firstName = firstName;
//   this.lastName= lastName;

//   // TODO: discuss why this is memory greedy:
//   this.printAge = function(){
//       console.log( this.firstName + " е на " + this.age + " години.");
//   };	   
// };

// // създаване и използване на обектите:
// var ivan = new Patient( 80, "Иван", "Иванов");
// var petyr = new Patient( 74, "Петър", "Петров");

// ivan.printAge();	
// petyr.printAge();

// // ЗАДАЧА: определяне на по-младия пациент:
// // функцията връща true, ако patient1 е по-млад (използваме '<=') от patient2.
// // в противен случй - връща false:
// function isYounger( patient1, patient2 ){
// if (patient1.age<=patient2.age){
//     return true;
// }
// }

// if ( isYounger(ivan, petyr) ){
// console.log(ivan.firstName + " е по-млад от " + petyr.firstName );
// }else{
// console.log(petyr.firstName + " е по-млад от " + ivan.firstName );
// };

/*----------------------------------------------------------------
findYoungestPerson - example
----------------------------------------------------------------*/

// an array of objects, representing data for a person:
// let persons = [
// 	{
// 		"gender": "female",
// 		"age": 32,
// 		"firstName": "Ada",
// 		"surName": "Byron"
// 	},
// 	{
// 		"gender": "male",
// 		"age": 42,
// 		"firstName": "Asen",
// 		"surName": "Asenov"
// 	},	
// 	{	
// 		"gender": "male",
// 		"age": 18,
// 		"firstName": "Petar",
// 		"surName": "Petrov"
// 	},
// 	{
// 		"gender": "male",
// 		"age": 33,
// 		"firstName": "Ivan",
// 		"surName": "Ivanov"
// 	}
// ];

// const findYoungestPerson = function(arr) {
// 	let minAge = arr[0].age;
// 	let youngestPerson;

// 	for (let i = 0; i < arr.length; i++) {
// 		let person = arr[i];

// 		if (person.age < minAge) {
// 			minAge = person.age;
// 			youngestPerson = person;
// 		}
// 	}

// 	return youngestPerson;
// }

// let youngestPerson = findYoungestPerson(persons);
// console.log(`The younger person is ${youngestPerson.firstName} - ${youngestPerson.age} years.`);


/*----------------------------------------------------------------
~~~~~~~~~~ IInd TASK ~~~~~~~~~~
Пример за масив от обекти.
Задачата е дадена като коментар в JS код --------------------------*/

// // масив от обекти представящи данни за различни марки бири:
// const beers = [
// 	{name: "Ариана", color: "светло", prices:[1.3, 2, 2.4], town: "София"},
// 	{name: "Ариана", color: "тъмно", prices:[1.4, 2.2, 2.8], town: "София"},
// 	{name: "Каменица", color: "светло", prices:[1.5, 2.5, 3], town: "Пловдив"},
// 	{name: "Загорка", color: "светло", prices:[2, 3, 3.6], town: "Стара Загора"},
// ];
// console.log("The beers array: ", beers);


// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // ПРИМЕР: изписване на имената и цвета на всички бири:
// for (let i = 0, len = beers.length; i < len; i++) {
// 	const beer = beers[i];
	
// 	console.log(`${beer.name} - ${beer.color}`);
// }

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // ЗАДАЧА: намиране на най-евтината бира по 3-та цена:
// // да се изпише в конзолата името, цвета и цената на най-евтината бира, като използваме за сравнението 3-тата цена в масива prices:
// let lessPrice = beers[0].prices[2];
//   let cheapestBeer = beers[0];

// for (let i = 0; i <beers.length; i++) {
//   if ( beers[i].prices[2]<=lessPrice ) {
//     lessPrice = beers[i].prices[2];
//     cheapestBeer = beers[i];
//   }
// }

// console.log(`"${cheapestBeer.name}, ${cheapestBeer.color}" - ${lessPrice}лв.`);
// // очакван изход:
// // "Ариана, светло" - 2.4


/*----------------------------------------------------------------
~~~~~~~~~~ IIIrd TASK ~~~~~~~~~~
да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени като пропъртита на обект дължина и ширина:
------------------------------------------------------------------*/

// // ---> YOUR CODE HERE <---
// function calcRectangleArea(rect){
// 	return rect.width*rect.height;
// }

// // TEST:
// let rectangle = {
// 	width: 6,
// 	height: 3
// };
// let area = calcRectangleArea(rectangle);

// console.log(`The area of rectangle is: ${area}`);

// // expected result:
// // The area of rectangle is: 18


/*----------------------------------------------------------------
Functions as properties values - Example
------------------------------------------------------------------*/


// // definition of 'logArray' object, with properties:
// // 'evens' - a function, which logs only the even numbers of the given array
// // 'odds' - a function, which logs only the odd numbers of the given array
// let logArray = {
// 	evens: function (arr) {
// 		console.log(`The even numbers are:`);
// 		for (let i = 0; i < arr.length; i++) {
// 			const element = arr[i];
// 			if (element % 2 === 0) {
// 				console.log(element);
// 			}
// 		}
// 	},
// 	odds: function (arr) {
// 		console.log(`The odd numbers are:`);
// 		for (let i = 0; i < arr.length; i++) {
// 			const element = arr[i];
// 			if (element % 2) {
// 				console.log(element);
// 			}
// 		}
// 	}
// };

// let numbers = [1, 2, 3, 4, 5];
// logArray.evens(numbers);
// logArray.odds(numbers);


/*----------------------------------------------------------------
~~~~~~~~~~ IVth TASK ~~~~~~~~~~
Functions as properties values
------------------------------------------------------------------*/ 

// TASK: define object 'calc', with next properties and values:
// 'add' - a function, which returns the sum of 2 numbers
// 'sub' - a function, which returns the subtraction of 2 numbers
// 'mult' - a function, which returns the multiplication of 2 numbers
// 'div' - a function, which returns the division of 2 numbers

// ---> YOUR CODE HERE <---

let calc = {
  add: function (num1, num2) {
    return num1 + num2;
  },

  sub: function (num1, num2) {
    return num1 - num2;
  },

  mult: function (num1, num2) {
    return num1 * num2;
  },

  div: function (num1, num2) {
    return num1 / num2;
  }
};

 

// TEST:
let x = 6, y = 3;
console.log(calc.add(x, y)); // 9
console.log(calc.sub(x, y)); // 3
console.log(calc.mult(x, y)); // 18
console.log(calc.div(x, y)); // 2
