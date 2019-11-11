import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [found, setFound] = useState(false);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res);
        setCharacters(res.data.results);
      })
  }, [characters]);

  return (
    <div>
      <SearchForm {...props} characters={characters} setFound={(ch) => setFound(ch)}/>
      <h2>{found ? found.name : "Not Found"}</h2>
      <Route path ='/character/:name' render={props => <CharacterCard {...props} character={found}/>}/>
      <section className="character-list">
        <h2>Character List</h2>
        
          {characters.map(character => (
            <CharacterCard {...props} key={character.id} character={character}/>
          ))}
        
      </section>
    </div>
  );
}
