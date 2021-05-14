import React from "react";
import { PokeListContainer } from "./PokeListElements";
import { useState } from "react";
import OptionsBar from "../OptionsBar";

const PokeList = ({ children }) => {
  const [filteredType, setFilteredType] = useState("");

  function filterClick(type) {
    if (type == filteredType) setFilteredType("");
    else setFilteredType(type);
  }

  let filteredList = [];
  if (filteredType) {
    if (children) {
      children.forEach(function (t) {
        let include = false;
        t.props.pokemon.types.forEach(function (y) {
          if (y.type.name == filteredType) include = true;
        });
        if (include) filteredList.push(t);
      });
    }
  } else {
    filteredList = children;
  }

  return (
    <>
      <OptionsBar click={filterClick} />
      <PokeListContainer>{filteredList}</PokeListContainer>
    </>
  );
};

export default PokeList;
