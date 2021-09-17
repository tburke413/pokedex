import React, { useState } from "react";
import Pokemon from "../components/Pokemon";
import Title from "../components/Title";
import Loading from "../components/Loading";
import PokeList from "../components/PokeList";
import OptionsBar from "../components/OptionsBar";
import GenFilter from "../components/GenFilter";

function Home({ pokedata, isLoaded }) {
  const [filter, setFilter] = useState({"pokeType":"","sort":"ascending"});

  function typeClick(type) {
    if (type === filter['pokeType']) setFilter({...filter, "pokeType": ""});
    else setFilter({...filter, "pokeType": type});
  }

  function sortClick() {
    if (filter["sort"] === "ascending") setFilter({...filter, "sort": "descending"});
    else setFilter({ ...filter, "sort": "ascending" });
  }

  let filteredList = [];
  if (filter["pokeType"]) {
    if (pokedata) {
      pokedata.forEach(function (t) {
        let include = false;
        t.types.forEach(function (y) {
          if (y.type.name === filter["pokeType"]) include = true;
        });
        if (include) filteredList.push(t);
      });
    }
  } 
  else {
    filteredList = pokedata;
  }

  let reversedList = []
  for (let i = filteredList.length - 1; i > -1; i--) {
    reversedList.push(filteredList[i]);
  }

  return (
    <>
      {!isLoaded && <Loading />}
      {isLoaded && (
        <>
          <Title text="Poké dex Data" />
          <OptionsBar
            typeClick={typeClick}
            type={filter["pokeType"]}
            sortClick={sortClick}
            sort={filter["sort"]}
          />
          <GenFilter />
          <PokeList>
            {console.log(filter["sort"])}
            {filter["sort"] === "ascending"
              ? filteredList.map((p, index) => {
                  return <Pokemon key={index} pokemon={p} />;
                })
              : reversedList.map((p, index) => {
                  return <Pokemon key={index} pokemon={p} />;
                })}
          </PokeList>
        </>
      )}
    </>
  );
}

export default Home;
