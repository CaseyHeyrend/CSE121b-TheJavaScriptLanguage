/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = "Casey Heyrend"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").innerHTML = myName

// Step 3: declare and instantiate a variable to hold the current year
const year = 2023

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").innerHTML = year

// Step 5: declare and instantiate a variable to hold the name of your picture
const picture = "./images/CaseyHeyrend.jpeg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src", picture)



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let basicFoods = ["Iphone", "Pizza", "Noodles", "Cookies", "Cotton Candy Grapes", "Water", "Fruits"]

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").innerHTML = basicFoods

// Step 3: declare and instantiate a variable to hold another favorite food
const anotherFood = "people"

// Step 4: add the variable holding another favorite food to the favorite food array
basicFoods.push(anotherFood)

// Step 5: repeat Step 2
document.querySelector("#food").innerHTML = basicFoods

// Step 6: remove the first element in the favorite foods array
basicFoods.shift()

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = basicFoods

// Step 8: remove the last element in the favorite foods array
basicFoods.pop()

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = basicFoods


