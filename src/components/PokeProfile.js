import React from "react";
import styled from "styled-components";
import padZero from "../utils/padZero";
import cap from "../utils/cap";

const PokeProfile = ({ selected, data, bgc }) => {
  return (
    <>
      <Profile>
        <BigId>#{padZero(selected)}</BigId>
        <BigId>{cap(data[selected - 1].name)}</BigId>
        <BigSprite src={data[selected - 1].sprites.front_default} />
        {data[selected - 1].types.map((t) => {
          return <BigType>{cap(t.type.name)}</BigType>;
        })}
      </Profile>
    </>
  );
};

export default PokeProfile;

const Profile = styled.div``;
const BigType = styled.h2``;
const BigId = styled.h1``;
const BigSprite = styled.img`
  width: 25rem;
  height: 25rem;
`;
