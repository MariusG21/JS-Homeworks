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
      <div class="main__voting-container__voting-option main__voting-container__voting-option-${superpower.id}">
        <div class="illustrative-pic"></div>
        <div class="superpower-name">${superpower.name}</div>
        <div class="separator-line"></div>
        <div class="vote-counter">Votes: <span class="counter counter-${superpower.id}">${superpower.votes}</span></div>
        <button class="vote-btn" data-id=${superpower.id}>Vote</button>
      </div>
    `;
  });

  document.querySelector(".main__voting-container").innerHTML = html;

  document.querySelectorAll(".vote-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      btn.disabled = true;
      const { id } = btn.dataset;
      const counter = document.querySelector(`.counter-${id}`);
      const res = await fetch(
        `https://api.api-ninjas.com/v1/counter?id=${id}&hit=true`,
        {
          headers: {
            "x-api-key": "lapX9tiSjA6BpVn/4v7Mow==GNJcGloReV0TXiRk",
          },
        }
      );
      const data = await res.json();
      const newVotes = data.value;
      counter.textContent = newVotes;
      btn.disabled = false;
    });
  });
}

renderVotingOptions(superpowers);
