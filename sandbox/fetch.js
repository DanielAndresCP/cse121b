const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";

let results = null;

async function getPokemonData(url, callback) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        callback(data);
    }
}

function doStuff(data) {
    results = data;
    // console.log("first: ", results);
    const outputEl = document.querySelector("#output")

    const html = `<h2>${results.name}</h2>
    <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;

    outputEl.innerHTML = html
}

function doStuffList(data) {
    console.log(data);

    const outputListEl = document.querySelector("#outputList")
    const pokeList = sortPokemon(data.results)
    let html = ""

    for (const pokemon of pokeList) {
        html += `<li>${pokemon.name}</li>`
    }

    outputListEl.innerHTML = html
}

function compare(a, b) {
    if (a.name > b.name) {
        // sort b before a
        return 1;
    } else if (a.name < b.name) {
        // a and b different but unchanged (already in the correct order)
        return -1;
    } else return 0; // a and b are equal
}

function sortPokemon(list) {
    let sortedList = list.sort(compare);
    return sortedList;
}



getPokemonData(url, doStuff);
getPokemonData(urlList, doStuffList);
// console.log("second: ", results);