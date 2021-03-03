import React from "react";
import { NavbarContainer, NavButton } from "./NavbarElements";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const goTo = (path) => {
    history.push(path);
  };

  return (
    <NavbarContainer>
      <NavButton onClick={() => goTo("/")}>Home</NavButton>
      <NavButton onClick={() => goTo("/trainer")}>Trainer</NavButton>
      <NavButton onClick={() => goTo("/team")}>Random Team</NavButton>
    </NavbarContainer>
  );
};

export default Navbar;
