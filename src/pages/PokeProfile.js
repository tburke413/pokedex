import React from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { TYPES_COLORS_MAP } from "../data/TypesColors";
import Profile from "../components/Profile";

const PokeProfile = () => {
  let params = useParams();
  let location = useLocation();
  console.log(params);
  console.log(location);
  let pokemon = location.state;

  if (!pokemon) {
    return null;
  }

  return (
    <PokeModal
      bgc={
        TYPES_COLORS_MAP.filter((t) => t.type === pokemon.types[0].type.name)[0]
          .color
      }
    >
      <Profile selected={pokemon.id} data={pokemon} />
    </PokeModal>
  );
};

export default PokeProfile;

const PokeModal = styled.div`
  width: 50rem;
  height: 50rem;
  background-color: ${(props) => props.bgc};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  border-radius: 50rem;
  cursor: pointer;
`;
