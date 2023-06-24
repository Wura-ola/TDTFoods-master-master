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
  if (Array.isArray(arr)) {
    arr.map((num) => {
      console.log(num);
      if (pins === num) {
        console.log("login sucessfull");
      } else {
        console.log("failed");
      }
    });
  } else {
    console.log("jjj");
  }
}
atmValidation(["1111", "2222", "3333", "2345"], 3333);
