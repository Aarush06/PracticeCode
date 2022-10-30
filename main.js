//Write code to create an array containing the months of the year that start with a ‘J’.
let jMonthArray = ["January", "June", "July"];

//Write code to create an array containing 700 occurrences of the word “joy”.
let joyArray = [];
for (let i = 0; i < 700; i++) {
    joyArray.push("joy");
}

//Write code to create an array containing 500 occurrences of the number 7.
let sevenArray = [];
for (let a = 0; a < 500; a++) {
    sevenArray.push(7);
}

//Write code to create an array containing 5000 random decimals between 0 (inclusive) and 100 (exclusive).
let decArray = [];
for (let b = 0; b < 5000; b++) {
    decArray.push(Math.random() * 100);
}

//Write code to create an array containing 300 random decimals between 0 (inclusive) and 40 (exclusive).
let decArray2 = [];
for (let c = 0; c < 300; c++) {
    decArray2.push(Math.random() * 40);
}

//Write code to create an array containing the multiples of 4 between 20 and 800, inclusive.
let multiArray = [];
for (let d = 20; d < 801; d += 4) {
    multiArray.push(d);
}
// let multiArr = [];
// for (let i = 20; i < 801; i++) {
//     if (i % 4 === 0) {
//         multiArr.push(i);
//     }
// }

//Write code to create an array containing the even numbers from 100 down to 10, inclusive.
let evenArray = [];
for (let i = 100; i > 9; i -= 2) {
    evenArray.push(i);
}

//Write code that will create an array of color names by splitting the string below using a comma (,) as the separator token.
let colorsStr = "red,orange,yellow,green,blue,indigo,violet";
let colorArray = colorsStr.split(",");

//Write code that will create an array of city names by splitting the string below using a semicolon (;) as the separator token.
let citiesStr = "Edmonton;Calgary;Vancouver;Saskatoon;Winnipeg";
let citiesArray = citiesStr.split(";");

// //Write code that will create an array of names provided by the user. Repeatedly prompt the user for a single name to add to the array, until the user enters “done”.
let userArray = [];
let input = prompt("Enter a single name to start your array");
while (input !== "done") {
    userArray.push(input);
    input = prompt("Enter a single name to add to your array");
}

