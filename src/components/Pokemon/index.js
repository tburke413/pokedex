import React from "react";
import { padZero, cap } from "../../utils";
import { useHistory } from "react-router-dom";
import { PokeContainer, Type, Sprite } from "./PokemonElements";

const Pokemon = ({ pokemon }) => {
  let history = useHistory();
  const goTo = () => {
    history.push({ pathname: `/pokemon/${pokemon.name}`, state: pokemon });
  };
  return (
    <PokeContainer onClick={goTo}>
      <h3>#{padZero(pokemon.id)}</h3>
      <h2>{cap(pokemon.name)}</h2>
      {pokemon.types.map((t, index) => {
        return <Type key={index}>{cap(t.type.name)}</Type>;
      })}
      <Sprite src={pokemon.sprites.front_default} />
    </PokeContainer>
  );
};

export default Pokemon;
