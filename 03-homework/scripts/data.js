export const superpowers = [
  {
    id: "11",
    name: "invisibility",
  },
  {
    id: "22",
    name: "super strength",
  },
  {
    id: "33",
    name: "reading minds",
  },
  {
    id: "44",
    name: "time travel",
  },
  {
    id: "55",
    name: "teleportation",
  },
  {
    id: "66",
    name: "immortality",
  },
];

const fetchSuperpowerVotes = async (id) => {
  const res = await fetch(`https://api.api-ninjas.com/v1/counter?id=${id}`, {
    headers: {
      "x-api-key": "lapX9tiSjA6BpVn/4v7Mow==GNJcGloReV0TXiRk",
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
