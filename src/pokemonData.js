export const getRandomIDs = (numCards) => {
  // returns numCards random distinct numbers between 1 and 151 (inclusive)
  const randomIDs = [];

  for (let i = 0; i < numCards; i++) {
    let randomID = Math.floor(Math.random() * 151) + 1;
    while (randomIDs.includes(randomID)) {
      randomID = Math.floor(Math.random() * 151) + 1;
    }
    randomIDs.push(randomID);
  }

  return randomIDs;
};

export const getPokemon = (numCards) => {
  const randomIDs = getRandomIDs(numCards);
  const pokemon = Promise.all(
    randomIDs.map(async (id) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();

      return {
        id,
        text: data.name,
        img: data.sprites.front_default,
      };
    })
  );

  return pokemon;
};
