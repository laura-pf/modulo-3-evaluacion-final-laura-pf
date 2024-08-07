import "../scss/App.scss";
import headerImage from "./images/rickymorty.png";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

function App() {
  const [listCharacters, setListCharacter] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const characterData = data.results.map((character) => {
          return {
            name: character.name,
            image: character.image,
            species: character.species,
            id: character.id,
            episode: character.episode.length,
            status: character.status,
            origin: character.origin.name,
          };
        });
        console.log(characterData);
        setListCharacter(characterData);
      });
  }, []);

  return (
    <>
      <header className="header">
        <img
          className="header__img"
          src={headerImage}
          alt="logo Rick y Morty"
        />
      </header>
      <Filters />

      <CharacterList characters={listCharacters} />
    </>
  );
}

export default App;
