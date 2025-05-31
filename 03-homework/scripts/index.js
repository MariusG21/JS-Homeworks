import { fetchVotes, superpowers, handleClickEvent } from "./data.js";

const init = async () => {
  renderVotingOptions(superpowers);
  const updatedSuperpowers = await fetchVotes();
  renderVotingOptions(updatedSuperpowers, false);
};

init();

function renderVotingOptions(superpowers, isLoading = true) {
  let html = "";

  superpowers.forEach((superpower) => {
    html += `
      <div class="main__voting-container__voting-option main__voting-container__voting-option-${
        superpower.id
      }">
        <div class="image-container">
          <img src=${superpower.image} alt=""/>
        </div>
        <div class="superpower-name">${superpower.name}</div>
        <div class="separator-line"></div>
        <div class="vote-counter">Votes: <span class="counter counter-${
          superpower.id
        }">
        ${
          isLoading
            ? `<img class="loading-spinner" src="assets/loading-spinner.gif"/>`
            : superpower.votes
        }
          </span></div>
        <button class="vote-btn ${isLoading && "isDisabled"}" data-id=${
      superpower.id
    }>Vote</button>
      </div>
    `;
  });

  document.querySelector(".main__voting-container").innerHTML = html;

  document.querySelectorAll(".vote-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const { id } = btn.dataset;
      handleClickEvent(btn, id);
    });
  });
}
