//string and strig methode
const firstname="tejaswini";
const lastname="nteju";
const age =25;
const str="Hey am ready to work on javascript";
const fav="hii,i like to become devops engineer";
let val;
val=firstname+lastname;
console.log(val);

//concatenation
val=firstname+" "+lastname;
console.log(val);
// append
val="teju ";
val+="ujet";
console.log(val);

val="my name is "+firstname +" am "+age+" years old";
console.log(val)
//lenght
val=firstname.length;
console.log(val);

//using concat() function
val=firstname.concat(" ",lastname);
console.log(val);

//change case
val=firstname.toUpperCase();
console.log(val);
val=firstname.toLowerCase();
console.log(val);
//accessing index
val=firstname[2];
console.log(val);
//using indexof
val=firstname.indexOf("j");
console.log(val);
val=firstname.lastIndexOf("w");
console.log(val);

//to find character using charAt()
val=firstname.charAt(3);
console.log(val);
//substring()
val=firstname.substring(0,4);
console.log(val);
//using slice()
val=firstname.slice(0,4);
console.log(val);
//split
val=str.split(" ");
console.log(val);
val=fav.split(",");
console.log(val);
//replace()
val=str.replace("Hey","hello")
console.log(val);
//includes()
val=str.includes("Hey");
console.log(val);

//numbers and math object
const num1=1000;
const num2=500;
let vall;
vall=num1+num2;
vall=num1-num2;
vall=num1/num2;
vall=num1%num2;
console.log(vall);
vall=Math.PI;
vall=Math.round(1.6);
vall=Math.ceil(3.4);
vall=Math.floor(3.4);
vall=Math.sqrt(125);
vall=Math.abs(-4);
vall=Math.pow(2,3);
vall=Math.min(2,4,76,89);
vall=Math.max(34,55,89,99);
vall=Math.exp(2,3);
vall=Math.random();//important it gives 1 to 9 random value
vall=Math.random()*20;//it gives random number from 1 to 19
vall=Math.random()*20+1;
vall=Math.floor(Math.random()*20+1);
console.log(vall);


