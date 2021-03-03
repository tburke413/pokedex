import React from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { TYPES_COLORS_MAP } from "../data/TypesColors";
import Profile from "../components/Profile";

const PokeProfile = () => {
  let params = useParams();
  let location = useLocation();
  // console.log(`params: ${JSON.stringify(params)}`);
  // console.log(location);
  let pokemon = location.state;

  if (!pokemon) {
    return null;
  }

  return <Profile selected={pokemon.id} data={pokemon} />;
};

export default PokeProfile;
