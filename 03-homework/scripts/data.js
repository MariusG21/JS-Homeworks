export const superpowers = [
  {
    id: "randomId1",
    name: "invisibility",
    image: "assets/invisibility.jpeg",
  },
  {
    id: "randomId2",
    name: "super strength",
    image: "assets/super-strength.jpeg",
  },
  {
    id: "randomId3",
    name: "reading minds",
    image: "assets/reading-minds.jpeg",
  },
  {
    id: "randomId4",
    name: "time travel",
    image: "assets/time-travel.jpeg",
  },
  {
    id: "randomId5",
    name: "teleportation",
    image: "assets/teleportation.jpeg",
  },
  {
    id: "randomId6",
    name: "immortality",
    image: "assets/immortality.jpeg",
  },
];

const fetchSuperpowerVotes = async (id) => {
  const res = await fetch(`https://api.api-ninjas.com/v1/counter?id=${id}`, {
    headers: {
      "x-api-key": "lapX9tiSjA6BpVn/4v7Mow==GNJcGloReV0TXiRk",
      Accept: "application/json",
    },
  });
  const data = await res.json();
  return data.value;
};

export const fetchVotes = async () => {
  const updatedSuperpowers = await Promise.all(
    superpowers.map(async (superpower) => {
      const votes = await fetchSuperpowerVotes(superpower.id);
      return { ...superpower, votes };
    })
  );

  return updatedSuperpowers;
};

export const handleClickEvent = async (btn, id) => {
  btn.classList.toggle("isDisabled");
  const counter = document.querySelector(`.counter-${id}`);
  counter.innerHTML = `<img class="loading-spinner" src="assets/loading-spinner.gif"/>`;

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
  btn.classList.toggle("isDisabled");
};
