import React from "react";
import { NavbarContainer, NavButton, PokedexHeader } from "./NavbarElements";
import { useHistory } from "react-router-dom";
import Pokedex from "../../images/PokedexHeader.png";

const Navbar = () => {
  const history = useHistory();
  const goTo = (path) => {
    history.push(path);
  };

  return (
    <div>
      <PokedexHeader src={Pokedex} />
      <NavbarContainer>
        <NavButton onClick={() => goTo("/")}>Home</NavButton>
        <NavButton onClick={() => goTo("/trainer")}>Trainer</NavButton>
        <NavButton onClick={() => goTo("/team")}>Random Team</NavButton>
        <NavButton onClick={() => goTo("/login")}>Login</NavButton>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
