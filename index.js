let btn = document.getElementById("btn");
let inputOne = document.getElementById("inputone");
let inputTwo = document.getElementById("inputtwo");
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordOne = "";
let passwordTwo = "";

btn.addEventListener("click", function generatePassword() {
  generatePasswordOne();
  generatePasswordTwo();
});

function generatePasswordOne() {
  for (i = 0; i <= 14; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    passwordOne += characters[randomNumber];
    inputOne.value = passwordOne;
  }
  passwordOne = "";
}
function generatePasswordTwo() {
  for (i = 0; i <= 14; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    passwordTwo += characters[randomNumber];
    inputTwo.value = passwordTwo;
  }
  passwordTwo = "";
}
