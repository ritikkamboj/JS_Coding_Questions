// logical or Operator 

// this one only move ahead when the left one is nullish value -> 0, "", NaN, undefined, null, false
const name1 = "" || 'anonymous';

console.log(name1)

// 2. Nullish COalescing operator 
// ( if left hand side contain any null value )

const data = 0 ?? "great";
console.log(data)


// 3.optional chaining 

// safely can access the nested value without throwing nay console.error( );


const obj = { name: "ritik", std: { school: "jai bharat" } }

console.log(obj?.std?.school);

// logical and opeartor us used when the left value is truthy 

const data3 = false && "I am cracking the inteview tomorrow"

console.log(data3)


// optional calling a function 


function greet() {
    console.log("jai maara di ")
}

greet?.();


// ternary operator 
let age = 19
const drinking = age > 18 ? "canDrink" : "prohibited "

console.log(drinking)
