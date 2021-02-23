import React from "react";
import styled from "styled-components";

const Loading = () => {
  return <Message>Loading Pokémon Data...</Message>;
};

export default Loading;

const Message = styled.h1`
  width: 100%;
  height: 100%;
  margin-top: 5rem;
`;
