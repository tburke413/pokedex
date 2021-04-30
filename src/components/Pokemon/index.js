import React from "react";
import { padZero, cap } from "../../utils";
import { useHistory } from "react-router-dom";
import { PokeContainer, Type, TypeContainer, Sprite } from "./PokemonElements";
import { typeMapper } from "../../utils";

const Pokemon = ({ pokemon }) => {
  let history = useHistory();
  const goTo = () => {
    history.push({ pathname: `/pokemon/${pokemon.name}`, state: pokemon });
  };
  return (
    <PokeContainer onClick={goTo}>
      <h3>#{padZero(pokemon.id)}</h3>
      <h2>{cap(pokemon.name)}</h2>
      <Sprite src={pokemon.sprites.front_default} />
      <TypeContainer>
        {pokemon.types.map((currentType, index) => {
          return (
            <Type key={index} typeBg={typeMapper(currentType)}>
              {cap(currentType.type.name)}
            </Type>
          );
        })}
      </TypeContainer>
    </PokeContainer>
  );
};

export default Pokemon;
