import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pokemon from "../components/Pokemon";
import Title from "../components/Title";
import Loading from "../components/Loading";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokedata, setPokedata] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      let pokeArray = [];
      for (let i = 151; i > 0; i--) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const fetchedPokemon = await response.json();
        pokeArray = [fetchedPokemon, ...pokeArray];
      }
      setIsLoaded(true);
      setPokedata(pokeArray);
    }
    fetchPokemon();
  }, []);

  return (
    <Container>
      {!isLoaded && <Loading />}
      {isLoaded && (
        <>
          <Title />
          <PokeList>
            {pokedata.map((p, index) => {
              return <Pokemon key={index} pokemon={p} />;
            })}
          </PokeList>
          )
        </>
      )}
    </Container>
  );
}

export default Home;

const PokeList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  @media screen and (max-width: 1370px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 1168px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 935px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 468px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
