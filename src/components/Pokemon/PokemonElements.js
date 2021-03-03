import styled from "styled-components";

export const PokeContainer = styled.div`
  width: 225px;
  border: 4px solid #000;
  border-radius: 2rem;
  margin: 1rem;
  padding-top: 2rem;
  filter: brightness(90%);
  cursor: pointer;

  &:hover {
    filter: brightness(100%);
  }
`;

export const Sprite = styled.img`
  margin: 0;
  padding: 0;
  width: 10rem;
  height: 10rem;
`;

export const Type = styled.p``;
