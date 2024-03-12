// import message from "./random1.js";
// import {person} from "./testExp.js"


// const messageFrom = message();

// console.log(messageFrom)

// console.log(JSON.stringify(person))

// const myDisplayer = (txt)=>{
//     console.log(txt)
// }

// function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   myFirst();
//   mySecond();


// Creating a promise
// Async function using await
const getRandomNumber = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            resolve(randomNumber);
        } else {
            reject(new Error('Random number is greater than 0.5'));
        }
    }, 1000);
    });
}

  // Consuming the async function with await
    const myAsyncFunction = async () => {
    try {
        const result = await getRandomNumber();
        console.log('Async function resolved with result:', result);
    } catch (error) {
        console.log('Async function rejected with error:', error.message);
    }
}

  // Calling the async function
myAsyncFunction();

