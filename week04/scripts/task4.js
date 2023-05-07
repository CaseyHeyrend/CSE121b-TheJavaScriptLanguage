/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let casey = {}
// Step 2: Inside of the object, add a property named name with a value of your name as a string
casey.name = "Casey Heyrend"
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
casey.photo = "/images/CaseyHeyrend.jpeg"
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
casey.favoriteFoods =["Pizza", "Noodles", "Cookies", "Cotton Candy Grapes", "Water", "Fruits"]
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
casey.hobbies =  ["Playing the Video Games(Switch)", "The Internet", "Daydream"]
// Step 6: Add another property named placesLived with a value of an empty array
casey.placesLived = []
var places = ["Soda Springs", "Montpelier", "Rigby"]
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
casey.placesLived.push({place: '', length: ''})
// Step 8: For each property, add appropriate values as strings
casey.placesLived[0].place = 'Soda Springs, Idaho'
casey.placesLived[0].length = 25
// Step 9: Add additional objects with the same properties for each place you've lived
casey.placesLived.push({place: '', length: ''})
casey.placesLived.push({place: '', length: ''})
casey.placesLived[1].place = 'Montpelier, Idaho'
casey.placesLived[1].length = 2
casey.placesLived[2].place = 'Rigby, Idaho'
casey.placesLived[2].length = 2
/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').innerHTML = casey.name
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').src = casey.photo
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').alt = casey.name
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
casey.favoriteFoods.forEach(el => {
    document.querySelector('#favorite-foods').innerHTML += (`<li>${el}</li>`)
})
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
casey.hobbies.forEach(el => {
    document.querySelector('#hobbies').innerHTML += (`<li>${el}</li>`)
})
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
casey.placesLived.forEach(el => {
    document.querySelector('#places-lived').innerHTML += (`<dt>${el.place}</dt>`)
    document.querySelector('#places-lived').innerHTML += (`<dd>${el.length} years</dd>`)
})
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
