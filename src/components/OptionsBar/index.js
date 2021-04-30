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
      {TYPES_COLORS_MAP.map((p) => {
        if (p.type == "fire") return <ImFire color={p.color} />;
        else if (p.type == "water") return <IoWater color={p.color} />;
        else if (p.type == "grass") return <ImLeaf color={p.color} />;
        else if (p.type == "electric") return <GiElectric color={p.color} />;
        else if (p.type == "normal") return <GiAlliedStar color={p.color} />;
        else if (p.type == "bug") return <AiFillBug color={p.color} />;
        else if (p.type == "flying") return <GiLibertyWing color={p.color} />;
        else if (p.type == "psychic") return <FaEye color={p.color} />;
        else if (p.type == "poison")
          return <FaSkullCrossbones color={p.color} />;
        else if (p.type == "fighting") return <GiPunch color={p.color} />;
        else if (p.type == "rock") return <GiMountaintop color={p.color} />;
        else if (p.type == "ground") return <SiGoogleearth color={p.color} />;
        else if (p.type == "dragon") return <FaDragon color={p.color} />;
        else if (p.type == "ice") return <FaRegSnowflake color={p.color} />;
        else if (p.type == "ghost") return <SiGhostery color={p.color} />;
        else if (p.type == "fairy") return <GiFairyWand color={p.color} />;
        else if (p.type == "steel") return <GiMetalScales color={p.color} />;
      })}
    </OptionsBarContainer>
  );
};

export default OptionsBar;
