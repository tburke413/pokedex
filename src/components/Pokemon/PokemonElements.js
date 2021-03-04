import styled from "styled-components";

export const PokeContainer = styled.div`
  width: 225px;
  height: 300px;
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

export const Type = styled.p`
  background-color: ${(props) => (props.typeBg ? props.typeBg : "black")};
  border-radius: 5px;
  width: 5rem;
  color: #fff;
  padding: 3px 0px 3px;
`;

export const TypeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0rem 1rem 0rem 1rem;
`;
