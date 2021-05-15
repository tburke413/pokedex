import React, { useState, useEffect } from "react";
import Home from "../../pages/Home";
import Team from "../../pages/Team";
import Login from "../../pages/Login";
import Trainer from "../../pages/Trainer";
import PokeProfile from "../../pages/PokeProfile";
import Navbar from "../Navbar";
import { Switch, Route } from "react-router-dom";

const Pokedex = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokedata, setPokedata] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      let pokeArray = [];
      for (let i = 898; i > 0; i--) {
        // for (let i = 98; i > 0; i--) {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${i}`
          );
          let fetchedPokemon = await response.json();

          let newThing = {
            name: fetchedPokemon.name,
            id: fetchedPokemon.id,
            types: fetchedPokemon.types,
            sprite_front_default: fetchedPokemon.sprites.front_default,
            height: fetchedPokemon.height,
            weight: fetchedPokemon.weight,
          };

          pokeArray = [newThing, ...pokeArray];
        } catch (error) {
          console.log(error);
        }
      }
      setIsLoaded(true);
      localStorage.setItem("pokedexData", JSON.stringify(pokeArray));
      setPokedata(pokeArray);
    }

    // check if local save exists
    const localSave = localStorage.getItem("pokedexData");
    if (localSave === null) fetchPokemon();
    else {
      setIsLoaded(true);
      setPokedata(JSON.parse(localSave));
    }
  }, []);

  function withProps(Component, props) {
    return function (matchProps) {
      return <Component {...props} {...matchProps} />;
    };
  }

  return (
    <>
      <Navbar />
      <Switch>
        <Route
          path="/"
          exact
          component={withProps(Home, { pokedata, isLoaded })}
        />
        <Route path="/team" exact component={withProps(Team, { pokedata })} />
        <Route path="/trainer" exact component={Trainer} />
        <Route path="/pokemon/:pokemon" exact component={PokeProfile} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </>
  );
};

export default Pokedex;
