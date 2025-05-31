export const superpowers = [
  {
    id: "id-11",
    name: "invisibility",
    image: "assets/invisibility.jpeg",
  },
  {
    id: "id-22",
    name: "super strength",
    image: "assets/super-strength.jpeg",
  },
  {
    id: "id-33",
    name: "reading minds",
    image: "assets/reading-minds.jpeg",
  },
  {
    id: "id-44",
    name: "time travel",
    image: "assets/time-travel.jpeg",
  },
  {
    id: "id-55",
    name: "teleportation",
    image: "assets/teleportation.jpeg",
  },
  {
    id: "id-66",
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
