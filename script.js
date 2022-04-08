const heraldBtn = document.getElementById("herald-btn");
const guardianBtn = document.getElementById("guardian-btn");
const crusaderBtn = document.getElementById("crusader-btn");
const archonBtn = document.getElementById("archon-btn");
const legendBtn = document.getElementById("legend-btn");
const ancientBtn = document.getElementById("ancient-btn");
const divineBtn = document.getElementById("divine-btn");
const immortalBtn = document.getElementById("immortal-btn");
let tableSection = document.getElementById("table-display");
let rankSection = document.getElementById("rank-display");

async function getHeroesData() {
  const URL = "https://api.opendota.com/api/heroStats";
  const response = await fetch(URL);
  const heroes = await response.json();
  return heroes;
}

async function manipulateHeroesArray() {
  const heroes = await getHeroesData();
  for (let hero of heroes) {
    hero.heAvg = ((hero["1_win"] * 100) / hero["1_pick"]).toFixed(2);
    hero.guAvg = ((hero["2_win"] * 100) / hero["2_pick"]).toFixed(2);
    hero.crAvg = ((hero["3_win"] * 100) / hero["3_pick"]).toFixed(2);
    hero.arAvg = ((hero["4_win"] * 100) / hero["4_pick"]).toFixed(2);
    hero.leAvg = ((hero["5_win"] * 100) / hero["5_pick"]).toFixed(2);
    hero.anAvg = ((hero["6_win"] * 100) / hero["6_pick"]).toFixed(2);
    hero.diAvg = ((hero["7_win"] * 100) / hero["7_pick"]).toFixed(2);
    hero.imAvg = ((hero["8_win"] * 100) / hero["8_pick"]).toFixed(2);
  }
  return heroes;
}

async function sortArrayByHerald() {
  let heroes = await manipulateHeroesArray();
  heroes.sort((a, b) => {
    return b.heAvg - a.heAvg;
  });
  return heroes;
}
async function sortArrayByGuardian() {
  let heroes = await manipulateHeroesArray();
  heroes.sort((a, b) => {
    return b.guAvg - a.guAvg;
  });
  return heroes;
}
async function sortArrayByCrusader() {
  let heroes = await manipulateHeroesArray();
  heroes.sort((a, b) => {
    return b.crAvg - a.crAvg;
  });
  return heroes;
}
async function sortArrayByArchon() {
  let heroes = await manipulateHeroesArray();
  heroes.sort((a, b) => {
    return b.arAvg - a.arAvg;
  });
  return heroes;
}
async function sortArrayByLegend() {
  let heroes = await manipulateHeroesArray();
  heroes.sort((a, b) => {
    return b.leAvg - a.leAvg;
  });
  return heroes;
}
async function sortArrayByAncient() {
  let heroes = await manipulateHeroesArray();
  heroes.sort((a, b) => {
    return b.anAvg - a.anAvg;
  });
  return heroes;
}
async function sortArrayByDivine() {
  let heroes = await manipulateHeroesArray();
  heroes.sort((a, b) => {
    return b.diAvg - a.diAvg;
  });
  return heroes;
}
async function sortArrayByImmortal() {
  let heroes = await manipulateHeroesArray();
  heroes.sort((a, b) => {
    return b.imAvg - a.imAvg;
  });
  return heroes;
}
