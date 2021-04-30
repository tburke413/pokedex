import React, { useState, useEffect } from "react";
import Pokemon from "../components/Pokemon";
import Title from "../components/Title";
import Loading from "../components/Loading";
import PokeList from "../components/PokeList";
import OptionsBar from "../components/OptionsBar";

function Home({ pokedata, isLoaded }) {
  return (
    <>
      {!isLoaded && <Loading />}
      {isLoaded && (
        <>
          <Title text="Poké dex Data" />
          <OptionsBar />
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
