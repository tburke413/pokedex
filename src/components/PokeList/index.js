import React from "react";
import { PokeListContainer } from "./PokeListElements";

const PokeList = ({ children }) => {
  return <PokeListContainer>{children}</PokeListContainer>;
};

export default PokeList;
