import React from "react";
import styled from "styled-components";
import { padZero, cap } from "../utils";
import { useHistory } from "react-router-dom";

const Pokemon = ({ pokemon }) => {
  let history = useHistory();
  const goTo = () => {
    history.push({ pathname: `/pokemon/${pokemon.name}`, state: pokemon });
  };
  return (
    <PokeCard onClick={goTo}>
      <Id>
        #{padZero(pokemon.id)} {cap(pokemon.name)}
      </Id>
      {pokemon.types.map((t, index) => {
        return <Type key={index}>{cap(t.type.name)}</Type>;
      })}
      <Sprite src={pokemon.sprites.front_default} />
    </PokeCard>
  );
};

export default Pokemon;

const PokeCard = styled.div`
  width: 200px;
  border: 4px solid #000;
  border-radius: 2rem;
  margin: 1rem;
  padding-top: 2rem;
  filter: brightness(90%);
  cursor: pointer;

  &:hover {
    filter: brightness(100%);
  }
`;

const Sprite = styled.img`
  margin: 0;
  padding: 0;
  width: 10rem;
  height: 10rem;
`;

const Id = styled.h2``;
const Type = styled.h3``;
