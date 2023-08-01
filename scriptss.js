// function reverseName(name) {
//   if (typeof name === "string") {
//     return name.split("").reverse().join("");
//   } else {
//     return;
//   }
// }
// console.log(reverseName("ibrahim"));

// const numbers = [65, 44, 12, 4, "long"];
// const newArr = numbers.map(myFunction);

// function myFunction(num) {
//   return num * 10;
// }
// const pins = [];

// function atmValidation(arr, pins) {
//   arr.forEach((num, pins) => {
//     // console.log(array);
//     if (pins === num) {
//       // return "success";
//       console.log("success");
//     } else {
//       console.log("failed");
//     }
//   });

// if (Array.isArray(arr)) {
//   arr.forEach((num) => {
//     console.log(num);
//   });
// } else {
//   console.log("jjj");
// }
// }
// console.log(atmValidation([1111, 2222, 3333, 4444], 4444));

// atm__cards = [122, 333, 44];
// atm__pins = [123, 432, 145];

// function atmValidation(arr, pins) {
//   if (Array.isArray(arr)) {
//     if (pins) {
//       if (arr.includes(pins)) {
//         console.log("login successful");
//       } else {
//         console.log("failed");
//       }
//     } else {
//       console.log("no pins");
//     }
//   } else {
//     console.log("an array please");
//   }
// }
// atmValidation();

function guessNumber(random) {
  const answer = Math.floor(Math.random() * 10);
  let maxNumberOfTimeTrial = 3;
  let numberOfTimeTried = 0;
  if (numberOfTimeTried < maxNumberOfTimeTrial) {
    console.log(answer);
    if (random === answer) {
      console.log("win");
    } else {
      console.log("loose");
    }
  } else {
    console.log("trial exceeded");
  }
}
//   if (answer < 6) {
//     if (answer === random) {
//       console.log("correct guess");
//     } else {
//       console.log("wrong guess but can try again");
//     }
//   } else {
//     console.log("bad guess");
//   }
// }
// guessNumber(3, 8);
// console.log(guessNumber(8, 9));

guessNumber(7);
