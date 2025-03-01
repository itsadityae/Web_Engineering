//class 6 : 
// - Write a function 'retryPromise(fn, retries, delay)' that retries a given asynchronous function (fn) if it fails.
// - The function should attempt to execute the 'fn' function, which returns a promise.
// - If the 'fn' function rejects, wait for the specified 'delay' (in milliseconds) before retrying.
// - Keep retrying up to a user-defined number of times ('retries').
// - If all attempts fail, return the final rejection error.
// - If the 'fn' function succeeds at any attempt, return its resolved value immediately.

// const retryPromise = (fn, retries, delay) => {
//     console.log("Attempting..");
//     return new Promise((resolve, reject) => {
//         fn()
//             .then(resolve)
//             .catch((err) => {
//                 if (retries > 0) {
//                     setTimeout(() => {
//                         retries--;
//                         console.log(
//                             "Retry attempt failed, " +
//                                 retries +
//                                 " attempts left"
//                         );
//                         retryPromise(fn, retries, delay)
//                             .then(resolve)
//                             .catch(reject);
//                     }, delay);
//                 } else {
//                     reject(err);
//                 }
//             });
//     });
// };

// function test() {
//     return new Promise((resolve, reject) => {
//         const success = false;
//         if (success) {
//             resolve("Success");
//         } else {
//             reject("fail");
//         }
//     });
// }

// retryPromise(test, 10, 1000)
//     .then((result) => console.log(result))
//     .catch((err) => console.error(err));

// - You have an array of numbers, and each number needs to be processed asynchronously.
// - Each step in the chain should:
//     1. First, multiply the number by 2.
//     2. Second, add 5 to the result.
//     3. Finally, convert the result to a string.
// - Write a function that:
//     - Takes an array of numbers as input.
//     - Uses a chain of promises to process each number sequentially.
//     - Returns a promise that resolves with an array of transformed results.
// - Use 'then' for promise chaining or async await.

function num_processor(num) {
    return new Promise((resolve) => {
        resolve(num * 2);
    })
        .then((res) => res + 5)
        .then((res) => res.toString());
}

function arr_processor(arr) {
    const results = [];
    let promiseChain = Promise.resolve();

    arr.forEach((num) => {
        promiseChain = promiseChain
            .then(() => num_processor(num))
            .then((new_num) => {
                results.push(new_num);
            });
    });

    return promiseChain.then(() => results);
}

const arr = [8, 3, 5, 2, 5, 9];
arr_processor(arr)
    .then((newArr) => console.log(newArr))
    .catch((err) => console.error(err));