// Global Constants
const API_URL = "http://www.boredapi.com/api/activity/"


// Getting all the elements needed globally
const activityTypeEl = document.getElementById("activityType")
const activityParticipantsEl = document.getElementById("activityParticipants")
const activityAccessibilityEl = document.getElementById("activityAccessibility")
const activityPriceEl = document.getElementById("activityPrice")

const searchButtonEl = document.getElementById("searchButton")
const clearButtonEl = document.getElementById("clearButton")

const activityResultsEl = document.getElementById("activityResults")


// The function to search activities, it calls all functions to validate fetch and display data
async function searchActivities() {
    const RESULTS_PER_QUERY = 10

    // Clear any past message
    displayMessage("")

    const type = activityTypeEl.value
    const participants = activityParticipantsEl.value
    const accessibility = activityAccessibilityEl.value
    const price = activityPriceEl.value

    const queryValidation = validateQuery({ type, participants, accessibility, price })
    if (queryValidation.result === "error") {
        displayMessage(queryValidation.data, "error")
        return
    }

    const queryCreation = createQueryObject({ type, participants, accessibility, price })

    const fetchResult = await getActivities(queryCreation.data, RESULTS_PER_QUERY)

    console.log(fetchResult.data);

    const dataValidation = validateData(fetchResult.data)

    if (dataValidation.result === "error") {
        displayMessage(dataValidation.data, "info")
        return
    }

    const finalResults = removeDuplicates(fetchResult.data)

    if (finalResults.foundDuplicates) {
        displayMessage(`Less than ${RESULTS_PER_QUERY} results are shown because duplicate records were found.
        This could be caused by the API randomly selecting the same record more than once,
        or because the API does not have more data`, "info")
    }

    displayActivities(finalResults.data)
}


function validateQuery({ type, participants, accessibility, price }) {
    const PARTICIPANT_MIN = 1
    const accessibility_RANGE = { min: 0, max: 1 }
    const PRICE_RANGE = { min: 0, max: 1 }

    if (participants !== "") {
        participants = Number(participants)
        if (participants < PARTICIPANT_MIN) {
            return { result: "error", data: `Invalid number of participants, min is ${PARTICIPANT_MIN}` }
        }
    }

    if (accessibility !== "") {
        accessibility = Number(accessibility)
        if (accessibility < accessibility_RANGE.min || accessibility > accessibility_RANGE.max) {
            return { result: "error", data: `Invalid accessibility factor, min is ${accessibility_RANGE.min} and max is ${accessibility_RANGE.max}, decimals are accepted` }
        }
    }

    if (price !== "") {
        price = Number(price)
        if (price < PRICE_RANGE.min || price > PRICE_RANGE.max) {
            return { result: "error", data: `Invalid price factor, min is ${PRICE_RANGE.min} and max is ${PRICE_RANGE.max}, decimals are accepted` }
        }
    }

    return { result: "success", data: "success" }
}

function createQueryObject({ type, participants, accessibility, price }) {
    const queryObject = new URLSearchParams()

    if (type !== "") {
        queryObject.append("type", type)
    }

    if (participants !== "") {
        queryObject.append("participants", participants)
    }

    if (accessibility !== "") {
        queryObject.append("accessibility", accessibility)
    }

    if (price !== "") {
        queryObject.append("price", price)
    }


    return { result: "success", data: queryObject }
}

async function getActivities(queryStringObject, nResults) {
    const queryString = queryStringObject.toString() === "" ? "" : `?${queryStringObject.toString()}`
    const fullURL = `${API_URL}${queryString}`

    const activityList = []

    for (let i = 0; i < nResults; i++) {
        const response = await fetch(fullURL)

        const responseObject = await response.json()

        activityList.push(responseObject)
    }

    return { result: "success", data: activityList }
}

function displayActivities(activityList) {
    activityResultsEl.innerHTML = ""

    let activityHTML = ""
    for (const activity of activityList) {
        activityHTML = `${activityHTML}
        <tr>
        <td>${activity.activity}</td>
        <td>${activity.type}</td>
        <td>${activity.participants}</td>
        <td>${activity.accessibility}</td>
        <td>${activity.price}</td>
        </tr>
        `
    }

    activityResultsEl.innerHTML = activityHTML
}

function validateData(activityList) {
    const foundError = activityList.some((x) => Object.hasOwn(x, "error"))

    if (foundError) {
        return { result: "error", data: activityList[0].error }
    }

    return { result: "success", data: "" }
}

function removeDuplicates(activityList) {
    // We remove duplicates and return only unique values
    // Duplication can happen when the api does not have enough data to give us the amount of results we asked for
    // or (given the nature of the api and this tool) when the api randomly returns the same value more than once

    // The filter condition is only true when the value we are checking is the first
    // appearance of that value, if the same value appears again, it won't be the first, so it is a duplicate

    // We create this temp array with map before anything else because indexOf (used in the filter method)
    // does not allow property access from what I undestand
    const tempArray = activityList.map((x) => x.key)

    const uniqueArray = activityList.filter((v, i) => tempArray.indexOf(v.key) === i)

    let foundDuplicates = false

    if (activityList.length !== uniqueArray.length) {
        foundDuplicates = true
    }

    return { result: "success", data: uniqueArray, foundDuplicates }
}


function displayMessage(message, type = "info") {
    const messageBoxEl = document.getElementById("messageBox")
    const currentClasses = Array.from(messageBoxEl.classList)

    messageBoxEl.classList.remove(...currentClasses)
    if (message !== "") {
        messageBoxEl.classList.add(type)
    }

    messageBoxEl.textContent = message
}

searchButtonEl.addEventListener("click", async (e) => {
    searchButtonEl.disabled = true
    await searchActivities()
    searchButtonEl.disabled = false
})

clearButtonEl.addEventListener("click", () => {
    activityTypeEl.value = ""
    activityParticipantsEl.value = ""
    activityAccessibilityEl.value = ""
    activityPriceEl.value = ""
    // Clear previous message
    displayMessage("")
})