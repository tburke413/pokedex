import React from "react";
import { TeamContainer } from "./TeamElements";
import Pokemon from "../Pokemon";

const Team = ({ data, ids }) => {
  // if ids is empty, return nothing
  // otherwise, return 6 pokecards

  if (ids) {
    return (
      <TeamContainer>
        {ids.map((pokemon, index) => {
          return <Pokemon pokemon={data[index]} />;
        })}
      </TeamContainer>
    );
  }
  return null;
};

export default Team;
