// alert("Namaskara");
console.log(123)
console.log("myname is tejaswini");
console.log(true);//boolean
var greeting="hii teju";//assigning string to greeting variable
console.log(greeting);
greeting="welcome to javascript";//reassigning 
console.log(greeting)
console.log([1,2,3,4]);//array
console.log({a:1,b:2,c:3});//object
//variables
//we can create variable using var,let,const
//var,ES6 or ES2015
var myname="tejaswini"
console.log(myname);
//undefined variable
var greet;
console.log(greet)
//rules and convention of variable
//letters,number,_,$
var $name="teju";
console.log($name);
var firstName="teju1";//camelcase
console.log(firstName);
var first_Name="teju2";//underscore
console.log(first_Name);
var FirstName="teju3";//pascalcase
console.log(FirstName);

//let 
let favcolor="blue"
console.log(favcolor)

//const keyword
const favflower="rose";
console.log(favflower);
// favflower="jasmin";//we cant reassign the const variable
// console.log(favflower)

// const object
const person={
    name:"teju",
    place:"mysore"
};
person.place="bengalore";//we can reassign the object variable in const not const variable
console.log(person);

//const array
const number=[1,2,3,4];
console.log(number);
number.push(6);
console.log(number);//we can modify const array values but we cant reassign that
//number=[1,22,3,4,5];// we cant reassign the array const values

//datatype in javascript
//primitive datatype
let name1="teju";
console.log(typeof(name1));
let age=22;
age=22.5;//in javascript it takes float,number,decimal as a number only
console.log(typeof(age));
let married=false;
console.log(typeof(married));
 
//null
let abc=null;
console.log(typeof(abc));//we are storing a value of nothing but it returns object its a bug in javascript

// undefined
let a;
console.log(typeof(a));
//symbol
const sym =Symbol();
console.log(typeof(sym));

//reference datatype
const hobbies=['reading','movies'];
console.log(typeof(hobbies));

//Date
const today=new Date();
console.log(today);
console.log(typeof(today));

//Type conversion in Javascript
//number to string
let val=5;
val=String(5);
console.log(val);
console.log(typeof(val));
console.log(val.length);

//boolean to string
val=String(true);
console.log(val);
console.log(typeof(val));
console.log(val.length);

//Date into string
val =String(new Date());
console.log(val);
console.log(typeof(val));
console.log(val.length);

//converting datatype by using tostring()
val=[1,2,3,].toString();
console.log(val);
console.log(typeof(val));
console.log(val.length);

val={name:"tejaswini"}.toString();
val=true.toString();
console.log(val);
console.log(typeof(val));
console.log(val.length);

//string to number
val=Number("5");
//using parseint()
val=Number(false);
val=Number(true);
val=parseInt("10");
console.log(val);
console.log(typeof(val));
console.log(val.toFixed(2));

//type cohesion=>js itself automatically convert the dataytpe 
const val1="9";//string
const val2=10;//number
const sum=val1+val2;
console.log(sum);
console.log(typeof(sum));

const a1="ddd";
const b="dcd";
let c=a1+b;
console.log(c);

