import React, { useState, useEffect } from "react";
import { randomNums } from "../utils";
import Pokemon from "../components/Pokemon";
import PokeList from "../components/PokeList";
import Title from "../components/Title";
import Ash from "../images/ash.png";
import styled from "styled-components";

const Team = ({ pokedata }) => {
  let randomTeamNums = [];
  while (randomTeamNums.length < 6) {
    const rndmNum = randomNums(0, pokedata.length);
    if (!randomTeamNums.includes(rndmNum)) randomTeamNums.push(rndmNum);
  }

  return (
    <PokeList>
      <Title text="Your Random Team" />
      {randomTeamNums.map((index) => {
        return <Pokemon pokemon={pokedata[index]} key={index} />;
      })}
      <br />
      <h1>Congratulations, you're on your way to becoming a Pokémon Master!</h1>
      <Image src={Ash} />
    </PokeList>
  );
};

export default Team;

const Image = styled.img`
  height: 69vh;
`;
