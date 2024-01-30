/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Daniel Concha",
    photo: "images/profile-picture.jpeg",
    favoriteFoods: ["Watermelon", "Empanadas", "Soup"],
    hobbies: ["Reading", "Coding", "Gardening"],
    placesLived: []
}

myProfile.placesLived.push({
    place: "Ñuble Region, Chile",
    length: "19 years"
})

// I havent lived in any other place


/* Populate Profile Object with placesLive objects */
document.querySelector("#name").innerText = myProfile.name
document.querySelector("#photo").setAttribute("src", myProfile.photo)
document.querySelector("#photo").setAttribute("alt", myProfile.name)

myProfile.favoriteFoods.forEach((v) => {
    const liEl = document.createElement("li")
    liEl.textContent = v
    document.querySelector("#favorite-foods").appendChild(liEl)
})

myProfile.hobbies.forEach((v) => {
    const liEl = document.createElement("li")
    liEl.textContent = v
    document.querySelector("#hobbies").appendChild(liEl)
})

myProfile.placesLived.forEach((v) => {
    const dtEl = document.createElement("dt")
    dtEl.textContent = v.place

    const ddEl = document.createElement("dd")
    ddEl.textContent = v.length

    document.querySelector("#places-lived").appendChild(dtEl)
    document.querySelector("#places-lived").appendChild(ddEl)
})

/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


