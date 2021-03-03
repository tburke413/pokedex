import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 2.5vh;
  background-color: #f00;
  border-bottom: 2px solid black;
  padding: 2.5rem;
`;

export const NavButton = styled.button`
  cursor: pointer;
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  width: 10vw;
  border-radius: 5px;
`;
