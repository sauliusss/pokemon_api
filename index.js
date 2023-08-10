const url = "https://pokeapi.co/api/v2/pokemon/";
const btn = document.querySelector("#btn");
const hp = document.querySelector("#hp");

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
    card(data);
  }
};

// Generate card

// make card function
let card = function (data) {
  console.log(data);
  // get data stats
  const hp = data.stats[0].base_stat;
  // get data image
  const imgSrc = data.sprites.other.dream_world.front_default;
  // get pokemon name
  const name = data.name;
  // get attack stats
  const attack = data.stats[1].base_stat;
  // get defence stats
  const defence = data.stats[2].base_stat;
  // special-attack stats
  const specialAttack = data.stats[3].base_stat;
  // special-defense stats
  const specialDefence = data.stats[4].base_stat;
  // speed stats
  const speed = data.stats[5].base_stat;
  appendTypes(data.types);
};

// make pokemon types

let appendTypes = function (types) {
  types.forEach(function (item) {
    let span = document.createElement("span");
    span.textContent = item.type.name;
    document.querySelector(".types").append(span);
  });
};

// add eventListener
btn.addEventListener("click", pokemonId);
