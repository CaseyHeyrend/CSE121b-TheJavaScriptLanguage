/* Lesson 2 */
document.getElementById('elementId');
/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = "Casey Heyrend";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
const modifyName = document.querySelector("#name");
modifyName.textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = "2022";

// Step 4: place the value of the current year variable into the HTML file
const modifyYear = document.querySelector("#year");
modifyYear.textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let myImage = "./images/CaseyHeyrend.jpeg";
let myImageDes = "An image of myself."

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
const modifyImage = document.querySelector("img");
modifyImage.setAttribute("src", myImage), ("alt", myImageDes);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
var food = ["Pizza", "Noodles", "Cookies"]

// Step 2: place the values of the favorite foods variable into the HTML file
const modifyfood =document.querySelector("#food");

// Step 3: declare and instantiate a variable to hold another favorite food
modifyfood.textContent= (food[0] + ", " + food[1] + ", and " + food[2]);
// Step 4: add the variable holding another favorite food to the favorite food array
// Step 5: repeat Step 2
// Step 6: remove the first element in the favorite foods array
// Step 7: repeat Step 2
// Step 8: remove the last element in the favorite foods array
// Step 7: repeat Step 2



