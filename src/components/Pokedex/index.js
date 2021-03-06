import React, { useState, useEffect } from "react";
import Home from "../../pages/Home";
import Team from "../../pages/Team";
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
      </Switch>
    </>
  );
};

export default Pokedex;
