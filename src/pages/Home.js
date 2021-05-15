import React, { useState } from "react";
import Pokemon from "../components/Pokemon";
import Title from "../components/Title";
import Loading from "../components/Loading";
import PokeList from "../components/PokeList";
import OptionsBar from "../components/OptionsBar";

function Home({ pokedata, isLoaded }) {
  const [filteredType, setFilteredType] = useState("");

  function filterClick(type) {
    if (type == filteredType) setFilteredType("");
    else setFilteredType(type);
  }

  let filteredList = [];
  if (filteredType) {
    if (pokedata) {
      pokedata.forEach(function (t) {
        // console.log(t);
        let include = false;
        t.types.forEach(function (y) {
          if (y.type.name == filteredType) include = true;
        });
        if (include) filteredList.push(t);
      });
    }
  } else {
    filteredList = pokedata;
  }

  return (
    <>
      {!isLoaded && <Loading />}
      {isLoaded && (
        <>
          <Title text="Poké dex Data" />
          <OptionsBar click={filterClick} />
          <PokeList>
            {filteredList.map((p, index) => {
              return <Pokemon key={index} pokemon={p} />;
            })}
          </PokeList>
        </>
      )}
    </>
  );
}

export default Home;
