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

const OptionsBar = ({ click, active }) => {
  return (
    <OptionsBarContainer>
      {TYPES_COLORS_MAP.map((p, index) => {
        if (p.type == "fire")
          return (
            <ImFire
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
        else if (p.type == "water")
          return (
            <IoWater
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
        else if (p.type == "grass")
          return (
            <ImLeaf
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
        else if (p.type == "electric")
          return (
            <GiElectric
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
        else if (p.type == "normal")
          return (
            <GiAlliedStar
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
        else if (p.type == "bug")
          return (
            <AiFillBug
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
        else if (p.type == "flying")
          return (
            <GiLibertyWing
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
        else if (p.type == "psychic")
          return (
            <FaEye
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
        else if (p.type == "poison")
          return (
            <FaSkullCrossbones
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
        else if (p.type == "fighting")
          return (
            <GiPunch
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
        else if (p.type == "rock")
          return (
            <GiMountaintop
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
        else if (p.type == "ground")
          return (
            <SiGoogleearth
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
        else if (p.type == "dragon")
          return (
            <FaDragon
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
        else if (p.type == "ice")
          return (
            <FaRegSnowflake
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
        else if (p.type == "ghost")
          return (
            <SiGhostery
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
        else if (p.type == "fairy")
          return (
            <GiFairyWand
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
        else if (p.type == "steel")
          return (
            <GiMetalScales
              key={index}
              size={35}
              color={!active ? p.color : active === p.type ? p.color : "grey"}
              onClick={() => {
                click(p.type);
              }}
            />
          );
      })}
    </OptionsBarContainer>
  );
};

export default OptionsBar;
