immortalBtn.addEventListener("click", () => {
  generateImmortalTable();
  rankSection.innerHTML = immortalBtn.innerHTML + "Rank";
});
divineBtn.addEventListener("click", () => {
  generateDivineTable();
  rankSection.innerHTML = divineBtn.innerHTML + "Rank";
});
ancientBtn.addEventListener("click", () => {
  generateAncientTable();
  rankSection.innerHTML = ancientBtn.innerHTML + "Rank";
});
legendBtn.addEventListener("click", () => {
  generateLegendTable();
  rankSection.innerHTML = legendBtn.innerHTML + "Rank";
});
archonBtn.addEventListener("click", () => {
  generateArchonTable();
  rankSection.innerHTML = archonBtn.innerHTML + "Rank";
});
crusaderBtn.addEventListener("click", () => {
  generateCrusaderTable();
  rankSection.innerHTML = crusaderBtn.innerHTML + "Rank";
});
guardianBtn.addEventListener("click", () => {
  generateGuardianTable();
  rankSection.innerHTML = guardianBtn.innerHTML + "Rank";
});
heraldBtn.addEventListener("click", () => {
  generateHeraldTable();
  rankSection.innerHTML = heraldBtn.innerHTML + "Rank";
});

async function generateImmortalTable() {
  let heroes = await sortArrayByImmortal();
  let html = `<table>
      <thead>
      <tr>
      <th class="text-decoration-underline mb-1">Hero</th>
      <th class="text-decoration-underline mb-1">Win Rate</th>
      <th class="text-decoration-underline mb-1">Picked</th>
      <th class="text-decoration-underline mb-1">Role</th>
      </tr>
      </thead>
      <tbody>`;
  for (let hero of heroes) {
    html += `<tr pb-5>
          <td>${hero["localized_name"]}</td>
          <td>${hero.imAvg}%</td>
          <td>${hero[`8_pick`]}</td>
          <td>${hero.roles[0]}</td>
           </tr>`;
  }
  html += `</tbody>
    </table>`;
  tableSection.innerHTML = html;
}
async function generateDivineTable() {
  let heroes = await sortArrayByDivine();
  let html = `<table>
      <thead>
      <tr>
      <th class="text-decoration-underline mb-1">Hero</th>
      <th class="text-decoration-underline mb-1">Win Rate</th>
      <th class="text-decoration-underline mb-1">Picked</th>
      <th class="text-decoration-underline mb-1">Role</th>
      </tr>
      </thead>
      <tbody>`;
  for (let hero of heroes) {
    html += `<tr>
          <td>${hero["localized_name"]}</td>
          <td>${hero.diAvg}%</td>
          <td>${hero[`7_pick`]}</td>
          <td>${hero.roles[0]}</td>
           </tr>`;
  }
  html += `</tbody>
    </table>`;
  tableSection.innerHTML = html;
}
async function generateAncientTable() {
  let heroes = await sortArrayByAncient();
  let html = `<table>
      <thead>
      <tr>
      <th class="text-decoration-underline mb-1">Hero</th>
      <th class="text-decoration-underline mb-1">Win Rate</th>
      <th class="text-decoration-underline mb-1">Picked</th>
      <th class="text-decoration-underline mb-1">Role</th>
      </tr>
      </thead>
      <tbody>`;
  for (let hero of heroes) {
    html += `<tr>
          <td>${hero["localized_name"]}</td>
          <td>${hero.anAvg}%</td>
          <td>${hero[`6_pick`]}</td>
          <td>${hero.roles[0]}</td>
           </tr>`;
  }
  html += `</tbody>
    </table>`;
  tableSection.innerHTML = html;
}
async function generateLegendTable() {
  let heroes = await sortArrayByLegend();
  let html = `<table>
      <thead>
      <tr>
      <th class="text-decoration-underline mb-1">Hero</th>
      <th class="text-decoration-underline mb-1">Win Rate</th>
      <th class="text-decoration-underline mb-1">Picked</th>
      <th class="text-decoration-underline mb-1">Role</th>
      </tr>
      </thead>
      <tbody>`;
  for (let hero of heroes) {
    html += `<tr>
          <td>${hero["localized_name"]}</td>
          <td>${hero.leAvg}%</td>
          <td>${hero[`5_pick`]}</td>
          <td>${hero.roles[0]}</td>
           </tr>`;
  }
  html += `</tbody>
    </table>`;
  tableSection.innerHTML = html;
}
async function generateArchonTable() {
  let heroes = await sortArrayByArchon();
  let html = `<table>
      <thead>
      <tr>
      <th class="text-decoration-underline mb-1">Hero</th>
      <th class="text-decoration-underline mb-1">Win Rate</th>
      <th class="text-decoration-underline mb-1">Picked</th>
      <th class="text-decoration-underline mb-1">Role</th>
      </tr>
      </thead>
      <tbody>`;
  for (let hero of heroes) {
    html += `<tr>
          <td>${hero["localized_name"]}</td>
          <td>${hero.arAvg}%</td>
          <td>${hero[`4_pick`]}</td>
          <td>${hero.roles[0]}</td>
           </tr>`;
  }
  html += `</tbody>
    </table>`;
  tableSection.innerHTML = html;
}
async function generateCrusaderTable() {
  let heroes = await sortArrayByCrusader();
  let html = `<table>
      <thead>
      <tr>
      <th class="text-decoration-underline mb-1">Hero</th>
      <th class="text-decoration-underline mb-1">Win Rate</th>
      <th class="text-decoration-underline mb-1">Picked</th>
      <th class="text-decoration-underline mb-1">Role</th>
      </tr>
      </thead>
      <tbody>`;
  for (let hero of heroes) {
    html += `<tr>
          <td>${hero["localized_name"]}</td>
          <td>${hero.crAvg}%</td>
          <td>${hero[`3_pick`]}</td>
          <td>${hero.roles[0]}</td>
           </tr>`;
  }
  html += `</tbody>
    </table>`;
  tableSection.innerHTML = html;
}
async function generateGuardianTable() {
  let heroes = await sortArrayByGuardian();
  let html = `<table>
      <thead>
      <tr>
      <th class="text-decoration-underline mb-1">Hero</th>
      <th class="text-decoration-underline mb-1">Win Rate</th>
      <th class="text-decoration-underline mb-1">Picked</th>
      <th class="text-decoration-underline mb-1">Role</th>
      </tr>
      </thead>
      <tbody>`;
  for (let hero of heroes) {
    html += `<tr>
          <td>${hero["localized_name"]}</td>
          <td>${hero.guAvg}%</td>
          <td>${hero[`2_pick`]}</td>
          <td>${hero.roles[0]}</td>
           </tr>`;
  }
  html += `</tbody>
    </table>`;
  tableSection.innerHTML = html;
}
async function generateHeraldTable() {
  let heroes = await sortArrayByHerald();
  let html = `<table>
      <thead>
      <tr>
      <th class="text-decoration-underline mb-1">Hero</th>
      <th class="text-decoration-underline mb-1">Win Rate</th>
      <th class="text-decoration-underline mb-1">Picked</th>
      <th class="text-decoration-underline mb-1">Role</th>
      </tr>
      </thead>
      <tbody>`;
  for (let hero of heroes) {
    html += `<tr>
          <td>${hero["localized_name"]}</td>
          <td>${hero.heAvg}%</td>
          <td>${hero[`1_pick`]}</td>
          <td>${hero.roles[0]}</td>
           </tr>`;
  }
  html += `</tbody>
    </table>`;
  tableSection.innerHTML = html;
}
