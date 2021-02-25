import React from "react";
import "./globals.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { TYPES_COLORS_MAP } from "../src/data/TypesColors";
import Pokemon from "../src/components/Pokemon";
import Profile from "../src/components/Profile";
import Title from "../src/components/Title";
import Loading from "../src/components/Loading";
import Navbar from "../src/components/Navbar";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokedata, setPokedata] = useState([]);
  const [viewingPokemon, setViewingPokemon] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState([]);

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
  }, [viewingPokemon]);

  const openModal = (p) => {
    if (p) {
      setSelectedPokemon(p.id);
    }
    setViewingPokemon(!viewingPokemon);
  };

  return (
    <Container>
      {!isLoaded && <Loading />}
      {isLoaded && (
        <>
          {/* Pokedex List View */}
          <Title />
          <Navbar />
          {!viewingPokemon && (
            <PokeList>
              {pokedata.map((p, index) => {
                return (
                  <span onClick={() => openModal(p)}>
                    <Pokemon
                      key={index}
                      onClick={() => openModal(p)}
                      pokemon={p}
                    />
                  </span>
                );
              })}
            </PokeList>
          )}
          {/* Pokedex Single View*/}
          {viewingPokemon && (
            <PokeModal
              onClick={() => openModal()}
              bgc={
                TYPES_COLORS_MAP.filter(
                  (t) =>
                    t.type === pokedata[selectedPokemon - 1].types[0].type.name
                )[0].color
              }
            >
              <Profile selected={selectedPokemon} data={pokedata} />
            </PokeModal>
          )}
        </>
      )}
    </Container>
  );
}

export default App;

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

const PokeModal = styled.div`
  width: 50rem;
  height: 50rem;
  background-color: ${(props) => props.bgc};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  border-radius: 50rem;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
