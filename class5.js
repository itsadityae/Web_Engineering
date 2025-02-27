//class 5 : 
// console.log("before");

// setTimeOut(() => {
//     console.log("Hello");
// }, 2000);

// setTimeOut(() => {
//     console.log("Check if he has token");
// }, 0);

// setTimeOut(() => {
//     console.log("Get product details");
// }, 0);

// console.log("After");

// let promise = new Promise(function (resolve, reject) {
//     var condition = true;
//     if (condition) {
//         resolve("This is resolved");
//     } else {
//         reject("This is rejectd");
//     }
// });
// console.log(promise);

// promise.then((res) => {
//     console.log("then", res);
// });

// let promise = new Promise(function (resolve, reject) {
//     var condition = false;
//     if (condition) {
//         resolve("This is resolved");
//     } else {
//         reject("This is rejectd");
//     }
// });
// console.log(promise);

// promise
//     .then((res) => {
//         console.log("then", res);
//     })
//     .catch((err) => {
//         console.log("catch", err);
//     })
//     .finally(() => {
//         console.log("promise is completed");
//     });

// let promise1 = new Promise(function (resolve, reject) {
//     resolve("promise1");
// });
// let promise2 = new Promise(function (resolve, reject) {
//     resolve("promise2");
// });
// let promise3 = new Promise(function (resolve, reject) {
//     resolve("promise3");
// });

// Promise.race([promise2, promise3]).then((message) => {
//     console.log(message);
// });

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(5);
//     }, 2000);
// });

// promise.then((res) => {
//     console.log(res);
//     return res + 1;
// })
//     .then((res2) => {
//         console.log(res2);
//         return res2 + 1;
//     })
//     .then((res3) => {
//         console.log(res3);
//         return res3 + 1;
//     });

// async function f() {
//     return 1;
// }

// f().then((val) => {
//     console.log(val);
// });

// async function f() {
//     return 1;
// }
// const val = await f();
// console.log(val);

// function p() {
//     return new Promise((resolve, reject) => {
//         resolve("Promise is resolved ");
//     });
// }

// function p1(data) {
//     return new Promise((resolve, reject) => {
//         resolve(data + "processed by p1 ");
//     });
// }

// function p2(data) {
//     return new Promise((resolve, reject) => {
//         resolve(data + "processed by p2 ");
//     });
// }

// async function x() {
//     try {
//         const data = await p();
//         console.log("step1", data);

//         const data1 = await p1(data);
//         console.log("step2", data1);

//         const data2 = await p2(data1);
//         console.log("step3", data2);
//     } catch (e) {
//         console.error("An error occurred:", e);
//     }
// }

// x();