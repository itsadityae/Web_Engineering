//Class : 1

// // In js we can call a function befor defining it. (property of js)
// showMe();
// function showMe() {}

// // usage of arrow function (->)

// const even_odd = (num) => {
//     if (num % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// };

// function divisible(num1) {
//     function divisor(num2) {
//         if (num1 % num2 === 0) {
//             console.log("Divisible");
//         } else {
//             console.log("Not Divisible");
//         }
//     }
//     return divisor;
// }

// // divisible(6)(2);

// function input(callback) {
//     let num1 = parseInt(prompt("Enter num1"));
//     let num2 = parseInt(prompt("Enter num2"));
//     callback(num1, num2);
// }

// function sum(a, b, callback) {
//     const sum = a + b;
//     callback(sum);
// }

// function even_odd(num) {
//     if (num % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }

// function math() {
//     input(sum())
// }

// math();

function getNumbers(callback, callback2) {
    let num1 = parseInt(prompt("Enter first number:"));
    let num2 = parseInt(prompt("Enter second number:"));
    callback(num1, num2, callback2);
}

function calculateSum(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}

function checkEvenOdd(sum) {
    if (sum % 2 === 0) {
        console.log(The total sum ${sum} is even.);
    } else {
        console.log(The total sum ${sum} is odd.);
    }
}

// Execution
getNumbers(calculateSum, checkEvenOdd);
