const url = "https://pokeapi.co/api/v2/pokemon/";
const btn = document.querySelector("#btn");

// set async and await function
// getUrl();
// async function getUrl() {
//   const response = await fetch(url);
//   const data = await response.json();
// }

// set pokemon id
let pokemonId = function () {
  // set random number between 1 - 20
  let id = Math.floor(Math.random() * 20) + 1;
  // set pokemon id with url
  const pokemonUrlId = url + id;
  // generate pokemonUrlId with async fetch function
  getUrl();
  async function getUrl() {
    const response = await fetch(pokemonUrlId);
    const data = await response.json();
    console.log(data);
  }
};

// add eventListener
btn.addEventListener("click", pokemonId);
