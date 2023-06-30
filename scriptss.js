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

function atmValidation(arr, pins) {
  arr.forEach((num, pins) => {
    // console.log(array);
    if (pins === num) {
      // return "success";
      console.log("success");
    } else {
      console.log("failed");
    }
  });

  // if (Array.isArray(arr)) {
  //   arr.forEach((num) => {
  //     console.log(num);
  //   });
  // } else {
  //   console.log("jjj");
  // }
}
console.log(atmValidation([1111, 2222, 3333, 4444], 4444));

// atm__cards = [122, 333, 44];
// atm__pins = [123, 432, 145];

// function atmValidation(arr, pins) {
//   if (Array.isArray(arr)) {
//     // arr.map((num) => {
//     //   // console.log(num);
//     //   if (pins === num) {
//     //     console.log("login sucessfull");
//     //   } else {
//     //     console.log("failed");
//     //   }
//     // });
//     arr.forEach(function () {
//       console.log(number);
//     });
//   }
// }
// atmValidation([1111, 2222, 3333, 4444], 4444);
