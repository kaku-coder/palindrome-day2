// var number = 221;

// const { PlaneLanding } = require("lucide-react");

// let str = number.toString();
// let reverse = str.split("").reverse().join("");

// console.log(str);
// console.log(reverse);

// console.log(str === reverse ? "this is palindrome" : "this is not palindrome");




function palindrome(number) {
  let str = number.toString();
  let reverse = str.split("").reverse().join("")

  console.log(str)
  console.log(reverse)
  return (str === reverse) ? "this is paladrom" : "this is not a paladrom";
}
palindrome(121)