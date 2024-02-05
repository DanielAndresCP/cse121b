/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples")
let templeList = []

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const art = document.createElement("article")

        const h3 = document.createElement("h3")
        h3.textContent = temple.templeName


        const img = document.createElement("img")
        img.setAttribute("src", temple.imageUrl)
        img.setAttribute("alt", temple.location)

        art.appendChild(h3)
        art.appendChild(img)

        templesElement.appendChild(art)
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")

    templeList = await response.json()

    displayTemples(templeList)
}

/* reset Function */
const reset = function () {
    templesElement.innerHTML = ""
}

/* filterTemples Function */
const filterTemples = function (temples) {
    reset()
    const filter = document.querySelector("#filtered").value


    switch (filter) {
        case "utah":
            displayTemples(temples.filter((x) => x.location.includes("Utah")))
            break;

        case "notutah":
            displayTemples(temples.filter((x) => !x.location.includes("Utah")))
            break;

        case "older":
            displayTemples(temples.filter((x) => {
                return Number(new Date(x.dedicated)) < Number(new Date(1950, 0, 1))
            }))
            break;

        case "all":

            displayTemples(temples)
            break;
    }

}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) })
