import React, { useState, useEffect } from "react";
import { getPokemon } from "./pokemonData";

const Cards = (props) => {
  const [clickedCards, setClickedCards] = useState([]);
  const [pokemonCards, setPokemonCards] = useState([]);

  const fetchPokemon = async (numCards) => {
    const pokemon = await getPokemon(numCards);
    setPokemonCards(pokemon);
  };

  useEffect(() => {
    fetchPokemon(props.numCards);
  }, []);

  function shuffle() {
    let temporaryPokemonCards = [...pokemonCards];

    for (let i = temporaryPokemonCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [temporaryPokemonCards[i], temporaryPokemonCards[j]] = [
        temporaryPokemonCards[j],
        temporaryPokemonCards[i],
      ];
    }

    setPokemonCards(temporaryPokemonCards);
  }

  function checkForPoint(e) {
    if (!clickedCards.includes(Number(e.target.closest(".card").id))) {
      setClickedCards((clickedCards) => [
        ...clickedCards,
        Number(e.target.closest(".card").id),
      ]);
      props.increaseScore();
    } else {
      props.checkBestscore(clickedCards.length);
      props.resetScore();
      setClickedCards([]);
    }

    shuffle();
  }

  return (
    <div
      style={{
        margin: "170px auto auto ",
        width: "90%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      {pokemonCards.map((item) => {
        return (
          <div
            onClick={(e) => {
              checkForPoint(e);
              console.log(clickedCards);
            }}
            style={{
              margin: "10px",
              borderRadius: "5px",
              background: "white",
            }}
            key={item.id}
            id={item.id}
            className="card"
          >
            <img
              style={{
                width: "230px",
                height: "200px",
                borderRadius: "5px 5px 0 0",
              }}
              alt={item.text}
              src={item.img}
            ></img>
            <p style={{ textAlign: "center", fontSize: "20px" }}>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
