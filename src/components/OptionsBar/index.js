import React from "react";
import { OptionsBarContainer } from "./OptionsBarElements";
import { TYPES_COLORS_MAP } from "../../data/TypesColors";
import { ImFire, ImLeaf } from "react-icons/im";
import { IoWater } from "react-icons/io5";
import {
  FaEye,
  FaSkullCrossbones,
  FaDragon,
  FaRegSnowflake,
} from "react-icons/fa";
import { AiFillBug } from "react-icons/ai";
import { SiGoogleearth, SiGhostery } from "react-icons/si";
import {
  GiElectric,
  GiAlliedStar,
  GiLibertyWing,
  GiPunch,
  GiMountaintop,
  GiFairyWand,
  GiMetalScales,
} from "react-icons/gi";

const OptionsBar = () => {
  return (
    <OptionsBarContainer>
      {TYPES_COLORS_MAP.map((p, index) => {
        if (p.type == "fire") return <ImFire key={index} color={p.color} />;
        else if (p.type == "water")
          return <IoWater key={index} color={p.color} />;
        else if (p.type == "grass")
          return <ImLeaf key={index} color={p.color} />;
        else if (p.type == "electric")
          return <GiElectric key={index} color={p.color} />;
        else if (p.type == "normal")
          return <GiAlliedStar key={index} color={p.color} />;
        else if (p.type == "bug")
          return <AiFillBug key={index} color={p.color} />;
        else if (p.type == "flying")
          return <GiLibertyWing key={index} color={p.color} />;
        else if (p.type == "psychic")
          return <FaEye key={index} color={p.color} />;
        else if (p.type == "poison")
          return <FaSkullCrossbones key={index} color={p.color} />;
        else if (p.type == "fighting")
          return <GiPunch key={index} color={p.color} />;
        else if (p.type == "rock")
          return <GiMountaintop key={index} color={p.color} />;
        else if (p.type == "ground")
          return <SiGoogleearth key={index} color={p.color} />;
        else if (p.type == "dragon")
          return <FaDragon key={index} color={p.color} />;
        else if (p.type == "ice")
          return <FaRegSnowflake key={index} color={p.color} />;
        else if (p.type == "ghost")
          return <SiGhostery key={index} color={p.color} />;
        else if (p.type == "fairy")
          return <GiFairyWand key={index} color={p.color} />;
        else if (p.type == "steel")
          return <GiMetalScales key={index} color={p.color} />;
      })}
    </OptionsBarContainer>
  );
};

export default OptionsBar;
