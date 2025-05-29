import { fetchVotes, superpowers } from "./data.js";

const dasd = async () => {
  const superpowers = await fetchVotes();
  renderVotingOptions(superpowers);
};

dasd();

function renderVotingOptions(superpowers) {
  let html = "";

  superpowers.forEach((superpower) => {
    html += `
      <div class="main__voting-container__voting-option" data-id=${superpower.id}>
        <div class="illustrative-pic"></div>
        <div class="superpower-name">${superpower.name}</div>
        <div class="separator-line"></div>
        <div class="vote-counter">Votes: <span class="counter">${superpower.votes}</span></div>
        <button class="vote-btn">Vote</button>
      </div>
    `;
  });

  document.querySelector(".main__voting-container").innerHTML = html;
}

renderVotingOptions(superpowers);
