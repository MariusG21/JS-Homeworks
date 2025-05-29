import { superpowers } from "./data.js";

function renderVotingOptions() {
  let html = "";

  superpowers.forEach((superpower) => {
    html += `
      <div class="main__voting-container__voting-option" data-id=${superpower.id}>
        <div class="illustrative-pic"></div>
        <div class="superpower-name">${superpower.name}</div>
        <div class="separator-line"></div>
        <div class="vote-counter">Votes: <span class="counter">0</span></div>
        <button class="vote-btn">Vote</button>
      </div>
    `;
  });

  document.querySelector(".main__voting-container").innerHTML = html;
}

renderVotingOptions();
