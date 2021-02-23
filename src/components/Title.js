import React from "react";
import styled from "styled-components";

const Title = () => {
  return <Heading>Pokédex</Heading>;
};

export default Title;

const Heading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(red, white);
  width: 100%;
  height: 12.5rem;
  font-size: 3.5rem;
`;
