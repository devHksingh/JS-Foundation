// console.log('hi');

let firstName = "Jhon"
const lastName ="Doe"

function greet(firstName){
    const fullName = firstName + " "+ lastName;
    return `Hi ${fullName} ! `
}

const output = greet(firstName)
console.log(output);

// let n =2 ;
// function square (num){
//     let ans = num * num;
//     return ans;
// }
// let sqr2 = square(2);
// let sqr4 = square(4)
// console.log(sqr2);
// console.log(sqr2);

// function one(x, y) {
//   console.log("Inside first function");
//   let num1 = x;
//   function two(y) {
//     console.log("Inside second function");
//     let num2 = y;
//     function three() {
//       console.log("Inside thrid function");

//       const total = num1 + num2;
//       return total;
//     }
//     const ans = three();
//     return ans;
//   }
//   const addition = two(y);
//   return addition;
// }
// const add = one(2, 4);
// console.log(add);
