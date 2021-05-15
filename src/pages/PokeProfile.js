import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Profile from "../components/Profile";

const PokeProfile = () => {
  let params = useParams();
  let location = useLocation();
  let pokemon = location.state;

  if (!pokemon) {
    return null;
  }

  return <Profile selected={pokemon.id} data={pokemon} />;
};

export default PokeProfile;
