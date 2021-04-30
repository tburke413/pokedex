import React, { useState, useEffect } from "react";
import { randomNums } from "../utils";
import Pokemon from "../components/Pokemon";
import PokeList from "../components/PokeList";
import Title from "../components/Title";
import Ash from "../images/ash.png";
import styled from "styled-components";

// instead add generation selection navmenu
// if pokedata is empty on page load, display nothing (remove Ash Congrats)
// simple! easy!

// deprecated: ignore
// when component is mounted on initial load, check if pokedata is empty, if not:
//   - load pokemon data
// otherwise use passed in pokedata
// generate 6 random numbers within the range
// present 6 pokemon cards based on data

const Team = ({ pokedata }) => {
  let randomTeamNums = [];
  while (randomTeamNums.length < 6) {
    const rndmNum = randomNums(0, 150);
    if (!randomTeamNums.includes(rndmNum)) randomTeamNums.push(rndmNum);
  }

  return (
    <PokeList>
      <Title text="Your Random Team" />
      {randomTeamNums.map((index) => {
        return <Pokemon pokemon={pokedata[index]} />;
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
