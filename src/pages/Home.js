import React, { useState, useEffect } from "react";
import Pokemon from "../components/Pokemon";
import Title from "../components/Title";
import Loading from "../components/Loading";
import PokeList from "../components/PokeList";

function Home({ pokedata, isLoaded }) {
  return (
    <>
      {!isLoaded && <Loading />}
      {isLoaded && (
        <>
          <Title text="Poké dex Data" />
          <PokeList>
            {pokedata.map((p, index) => {
              return <Pokemon key={index} pokemon={p} />;
            })}
          </PokeList>
        </>
      )}
    </>
  );
}

export default Home;
