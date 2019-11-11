import React from "react";

export default function CharacterCard(props) {
  return(
    <div>
      <img src={props.character.image} alt="Photo of {props.character.name}" />
      <h1>{props.character.name}</h1>
      <h2>{props.character.gender}</h2>
      <h2>{props.character.species}</h2>
    </div>
  );
}
