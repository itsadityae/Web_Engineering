//class 4 :

// let timer = (function () {
//     for (let index = 10; index >= 0; index--) {
//         console.log(index);
//     }
//     console.log("Happy New Year");
// })();

// let fact = (function (n) {
//     if (n == 1) {
//         return 1;
//     }
//     return fact(n - 1) * n;
// })();

//////////////////////////////////////////////////////////////////////

// let print_fact = (function (n) {
//     let ans = fact(n);
//     console.log(ans);
// })();

// let add_item = (i, arr) => {
//     arr.push(i);
// };

// let calc_price = (arr) => {
//     let sum = 0;
//     for (let index = 0; index < arr.length; index++) {
//         sum += arr[index];
//     }
//     return sum;
// };

// let make_payment_conf_order = () => {
//     let ans = confirm("Do you want to confirm the order and make payment?");
//     return ans;
// };

// let conf_message = (ans) => {
//     if (ans) {
//         console.log("Your order has been confirmed");
//     } else {
//         console.log("Your order has not been confirmed");
//     }
// };

// let online_shopping = (cb1, cb2, cb3, cb4) => {
//     let cart = [];
//     cb1(100, cart);
//     cb1(200, cart);
//     let total = cb2(cart);
//     let ans = cb3();
//     cb4(ans);
// };

// online_shopping(add_item, calc_price, make_payment_conf_order, conf_message);

//////////////////////////////////////////////////////////////////////

// class Car {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     static st_greet() {
//         console.log("hello from static of parent");
//     }

//     greet() {
//         console.log("hello from normal of parent");
//     }
// }

// class my_Car extends Car {
//     st_greet() {
//         console.log("hello from static of child");
//     }

//     greet() {
//         console.log("hello from normal of child");
//     }
// }

// let car1 = new Car("Tesla1", 1);
// let car2 = new my_Car("Tesla2", 2);

// // car1.st_greet();
// car2.st_greet();
// car1.greet();
// car2.greet();

//////////////////////////////////////////////////////////////////////

const person1 = {
  firstname: "krish",
  lastname: "raju",
  fullname: function () {
    console.log(this.firstname + this.lastname);
  },
};

const person2 = {
  firstname: "vatsal",
  lastname: "singh",
};

person1.fullname.call(person2);
person1.fullname.apply(person2, ["oslo", "norway"]);
let data = person1.fullname.bind(person2, "oslo", "norway");
