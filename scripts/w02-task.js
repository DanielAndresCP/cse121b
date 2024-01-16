/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Daniel Concha"
const currentYear = new Date().getFullYear()
const profilePicture = "images/profile-picture.jpeg"


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name")
const foodElement = document.getElementById("food")
const yearElement = document.querySelector("#year")

const imageElement = document.querySelector("#home img")

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = currentYear

imageElement.setAttribute("src", profilePicture)
imageElement.setAttribute("alt", `Profile image of ${fullName}`)



/* Step 5 - Array */
const favoriteFoods = ["Watermelon","Empanadas","Soup"]
foodElement.innerHTML = favoriteFoods

const anotherFavFood = "Anything my mom makes"
favoriteFoods.push(anotherFavFood)
foodElement.innerHTML += `</br>${favoriteFoods}`

favoriteFoods.shift()
foodElement.innerHTML += `</br>${favoriteFoods}`

favoriteFoods.pop()
foodElement.innerHTML += `</br>${favoriteFoods}`