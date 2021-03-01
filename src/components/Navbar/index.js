import React from "react";
import { NavbarContainer } from "./NavbarElements";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const goTo = (path) => {
    history.push(path);
  };

  return (
    <NavbarContainer>
      <span onClick={() => goTo("/")}>Home</span>
      <span onClick={() => goTo("/team")}>Team</span>
    </NavbarContainer>
  );
};

export default Navbar;
