import React from "react";
import { LoadingContainer, LoadingGif } from "./LoadingElements";
import Pokegif from "../../images/pikachu_loading.gif";

const Loading = () => {
  return (
    <LoadingContainer>
      {/* Loading Pokémon Data... */}
      <LoadingGif src={Pokegif} />
    </LoadingContainer>
  );
};

export default Loading;
