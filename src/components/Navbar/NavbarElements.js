import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 2.5vh;
  background-color: #ff0102;
  padding: 2.5rem;

  @media screen and (max-width: 630px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const NavButton = styled.button`
  cursor: pointer;
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  width: 150px;
  border-radius: 5px;
  background: #ffff00;
  box-shadow: 2px 2px;

  @media screen and (max-width: 630px) {
    display: flex;
    justify-content: center;
    width: 20vw;
    font-size: clamp(0.5rem, 0.75rem, 2rem);
  }
`;

export const PokedexHeader = styled.img`
  height: 10vh;
  width: 100vw;
  background-color: #eb3223;
  margin-bottom: -5px;
  padding: 0;
  border: 0px;
`;
