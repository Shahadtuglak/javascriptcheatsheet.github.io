// 1. Display..

// alert("Hello World!");
// console.log("Hello World");
// document.write("HEllo");
// innerHTML



//2. Varibles..

// var num = 10;
// var name = "Shahad Tuglak";
// var bool = true; 			// Boolean
// var und = undefined;		// variable define without Value
// var nullValue = null;		//absence of any object value.
// console.log(num, name, bool, und, nullValue);


//3. Operators

//Arithematic Operators
var a = 10;
var b = 20;
var x = 30;
//console.log(a+b);     //Addition
//console.log(a-b);     //Subtraction
//console.log(a*b);     //Multiply
//console.log(a/b);     //Divide
//console.log(a%b);     //Modulo Operator{Remainder}
//console.log(a++);     //Incremental
//console.log(b--);     //Decremental
//console.log(x ** 3);  //Exponential(10 * 10* 10);


// console.log("Assignment Operator")
// Assignment Operators
// a = 40;
// console.log(a);
// a += 10; // a = a + 10
// console.log(a);
// a -= 10;
// console.log(a); // a = a -10;

//Comparison Operator
// console.log(a == b); //Check Values
// console.log(a === b);// Check Value as well as DataType as well (Unity Operator)
// console.log(a < b); //Less Than
// console.log(a > b); //Greater than
// console.log(a >= b); //Greater than or Equals to
// console.log(a <= b); //Less than or Equals to


//Logical Operator
// 1.Logical AND && (If both the conditions are true then this will print true)
// console.log(true && true); //true
// console.log(false && false); // false
// console.log(true && false);// false
// console.log(false && true);// false

 //2. Logical OR || (if only one condition is true this will print true)
 // console.log(true  || true);   //true
 // console.log(false ||  false); //false
 // console.log(true  || false); //true
 // console.log(false || true); //true

 // 3. NOT ! it give solution opposite to the input
 // console.log(!true);
 // console.log(!false);

//Functions

// Without Arguments ..
//function functionInfo(){ 
//	console.log("A JavaScript function is a block of code designed //to perform a particular task. A JavaScript function is //executed when calls it ");
//}
//functionInfo(); //Calling Function

// With Arguments..
//function addition(num1 , num2){ 
//	console.log(num1 + num2 );
//}
//
//addition(10,20); //Calling Function


//4. JavaScript Objects

//Create Object
//var car = {
//    carName: "Verna", //PROPERTIES
//    carModel: "2020S",
//    color:"Black",
//    FullProperties: function(){  //FUNCTION
//        console.log("Car Name is " + carName + " Model is " + carModel + " & Color is " + color );
//    }
//};
//console.log(car); //Print Whole Objects
//console.log("The Car Name is " + car.carName);//Print only Selected roperties..
//console.log(car.FullProperties); //Call without Parathesis..


//5. CONDITIONAL STATEMENTS
// I. if() & else
//var a = 10;
//var b = 10;
//if(a < b){
//    console.log("a is less than b");
//}
//else if(b < a) {
//    console.log("b is less than a");
//}
//else{
//    console.log("a is equals to b");
//}

// II. switch
//var number = 2;
//switch(number){
//    case 1:
//        console.log("Number is 1");
//        break;
//    case 2:
//        console.log("Number is 2");
//        break;
//    default:
//        console.log("Number is 3");
//        break;
//}

//6. Events
//When button is clicked
//function btnClick(){
 //   alert("Button was Clicked!")
//}
//When mouse is over something
//function mouseOver(){
  //  alert("Mouse was over the Button!")
//}
//When mouse is out of something
// function mouseOut(){
   // alert("Mouse was out of the Button");
// }
//when keyboard key is pressed
// function keyPress(){
   // alert("Key is Pressed");
// }

// 7. Arrays..
var fruits = ["apple","banana", "grapes", "guavava"]; // Array
//console.log(fruits)
//console.log(fruits.length); //Get the Length of Array

// Access an Array item using the index position
//console.log(fruits[0]); //Array start with 0
//console.log(fruits[1]); //Array start with 1


//access whole using forEach Loop
// fruits.forEach(function(number, index){
//    console.log(number, index)
// })

// Get Index No. of the array
// console.log(fruits.length - 1);


// Update the value of Index Value
// console.log(fruits[0] = "Musk Melon");


//Array Methods to add or Remove
//1. push (Add element at the end of the array)
//var addedFruits = fruits.push("Mango");


//2. pop(remove element from end of the array)
//var addedFruits = fruits.pop();


//3. unshift(add element to the begining)
// var addedFruits = fruits.unshift("watermelon");


//4. shift(remove element from the begining)
// var addedFruits = fruits.shift();

// 5. toString (convert array to a string seperated by  commas)
// console.log(fruits.toString());



//access whole using forEach Loop
// fruits.forEach(function(number, index){
//    console.log(number, index)
// })



// Sorting Methods

//1. sort(sort the array alphabetically {a,b,c,d,e,f})
//console.log(fruits.sort());

//2. sort the array in a right way {more correct way}
// var newArray = [100,5,10,1400,300];
// console.log(newArray.sort(function(a,b){
//     return a- b;
// }));

//3 . reverse(it reverse the array alphabetically)
//console.log(fruits.reverse());


//Searching Methods..
//1. indexOf() -> use to search first  element in the array which you want to find (in multiple number cases)
// console.log(newArray.indexOf(10)); 

//2. lastIndexOf() -> show the index of last searching element in array which you want to find (in multiple number cases)
// console.log(newArray.lastIndexOf(10));

//3. includes() -> if element is present this will return the boolean value
// console.log(newArray.includes(10));

//4. find() -> use to find the element in a condition
// console.log(newArray.find((number) => number < 400 ));

//Important Methods in Array...
// 1. filter() -> return all the elements which satisfy the condition


var newArray = [100,200,300,100,500,1400];

// var filteredArray = newArray.filter(function(value){
//    return value > 300;
// });

// console.log(filteredArray);


//filter method but using Arrow Function....
// var filteredArray = newArray.filter(value => value < 300);
// console.log(filteredArray)

//2. map() -> if condition satisfy / not satisfy this will return boolean in place of that number & | also if you want to make some operation to all the values of the array then we use the map method....

// var filteredArray = newArray.map(function(value){
//    return value < 300;
//    return value * 10;
// });
// console.log(filteredArray);


//3. reduce() -> use to get the sum of all the numbers in the array...

// var totalSum = newArray.reduce(function(accumulator, currentValue){
//    return accumulator + currentValue;
// });
// console.log(totalSum);


// 9. String..
var string = "Hello, my name is \"Shahad Tuglak\" ";
var newString = "I am Web Developer";
//console.log(string);
//console.log(string.length);


//String Methods...

//1. slice();
//console.log(string.slice(0,5));

//2.  substring();
//console.log(string.substring(0,5));

//3. replace()
//console.log(string.replace("Shahad", "Ali"));

//4. toUpperCase();
//console.log(string.toUpperCase());

//4. toLowerCase();
// console.log(string.toLowerCase());

//5. concat();
//console.log(string.concat(newString));

//6. trim();
// console.log(newString.trim());


var newString2 = "I am Web Developer Web";
//7. charAt();
// console.log(newString2.charAt(0));

//8. charCodeAt();
//console.log(newString2.charCodeAt(0));

// 9. split();
//console.log(newString2.split());


//Searching in String methods()...

//1. indexOf();
//console.log(newString2.indexOf("Web"));

//2. lastIndexOf();
//console.log(newString2.lastIndexOf("Web"))

//3. search();
//console.log(newString2.search("Web"));

//4. includes();
//console.log(newString2.includes("Web"));

//5. startsWith();
//console.log(newString2.startsWith("I"));

//6. endsWith();
//console.log(newString2.endsWith("Web"));



//10. Loops in JavaScript..
var arr = [100,200,300,400,500];
//1. for()
// for(var i = 0; i < arr.length ; i++){
//    console.log(arr[i]);
// }

//2. while()
// var i = 0;
// while(i < arr.length){
//    console.log(arr[i]);
//    i++;
// }

//forEach()
// arr.forEach(function(number){
//    console.log(number);
// })


//11. JavaScript Date
// var d = new Date();
// console.log(d);


//12. Math Object in JavaScript..
//1. PI
var pi = Math.PI;
console.log(pi);

//2. round
var round = Math.round(22.32);
console.log(round);

//3. pow
var power = Math.pow(3,2);
console.log(power)

//4. sqrt
var squareRoot = Math.sqrt(64);
console.log(squareRoot);

//5. abs
var absolute = Math.abs(-23);
console.log(absolute);

// 6. min
var minimum = Math.min(0,400,950,-1);
console.log(minimum);

//7. max
var maximum = Math.max(0,250,500,1512,-8);
console.log(maximum)

//8. random
var randomNumber = Math.random();
console.log(randomNumber);














