const url = "https://pokeapi.co/api/v2/pokemon/";
const btn = document.querySelector("#btn");
const hp = document.querySelector(".hp");
const name = document.querySelector(".pokemon_name");
const image = document.querySelector(".card_image");
const attack = document.querySelector(".attack");
const defence = document.querySelector(".defence");
const specialAttack = document.querySelector(".special-attack");
const specialDefence = document.querySelector(".special-defence");
const speed = document.querySelector(".speed");
const pokemonTypes = document.querySelector(".pokemon_types");
const cardContainer = document.querySelector(".card_container");

// colors

const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};

// set pokemon id
let pokemonId = function () {
  // set random number between 1 - 20
  let id = Math.floor(Math.random() * 20) + 1;
  // set pokemon id with url
  const pokemonUrlId = url + id;
  // generate pokemonUrlId with async fetch function
  // set async and await function
  // getUrl();
  getUrl();
  // async function
  async function getUrl() {
    //   const response = await fetch(url);
    const response = await fetch(pokemonUrlId);
    const data = await response.json();
    // Generate card
    card(data);
    // get data stats
    name.textContent = `Name: ${data.name}`;
    hp.textContent = `HP: ${data.stats[0].base_stat}`;
    attack.textContent = `Attack: ${data.stats[1].base_stat}`;
    defence.textContent = `Defence: ${data.stats[2].base_stat}`;
    specialAttack.textContent = `Special-attack: ${data.stats[3].base_stat}`;
    specialDefence.textContent = `Special-defence: ${data.stats[4].base_stat}`;
    speed.textContent = `Speed: ${data.stats[5].base_stat}`;

    // image.textContent = `${data.sprites.other.dream_world.front_default}`;
    // const imgUrl = data.sprites.other.dream_world.front_default;
    // const imageImage = document.createElement("img");
    // imageImage.src = imgUrl;
    // image.append(imageImage);
  }
};

// make card function
let card = function (data) {
  console.log(data);
  const imgSrc = data.sprites.other.dream_world.front_default;
  const themeColor = typeColor[data.types[0].type.name];
  console.log(themeColor);

  colorCard(themeColor);
  colorButton(themeColor);
  // make stats in html section

  image.innerHTML = `
  <div class="card_image">
        <img src="${imgSrc}"
      </div>`;

  pokemonTypes.innerHTML = `
  <div class="pokemon_types">
      
    </div>`;
  appendTypes(data.types);
};

// make pokemon types

let appendTypes = function (types) {
  console.log(types);
  types.forEach(function (item) {
    let span = document.createElement("SPAN");
    span.textContent = item.type.name;
    document.querySelector(".pokemon_types").append(span);
  });
};

let colorCard = function (color) {
  cardContainer.style.background = `radial-gradient( ${color} 100%, #ffffff 100%)`;
  cardContainer.querySelectorAll(".pokemon_types span").forEach(function (typeColor) {
    typeColor.style.backgroundColor = color;
  });
};
let colorButton = function (color) {
  btn.style.background = `radial-gradient( ${color} 100%, #ffffff 100%)`;
  btn.querySelectorAll(".pokemon_types span").forEach(function (typeColor) {
    typeColor.style.backgroundColor = color;
  });
};

// add eventListener
btn.addEventListener("click", pokemonId);
