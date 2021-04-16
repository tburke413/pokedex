import React from "react";
import styled from "styled-components";
import Ash from "../images/ash.png";
import Lance from "../images/lance.webp";
import Blaine from "../images/blaine.png";
import Agatha from "../images/agatha.png";
import Brock from "../images/brock.png";
import Bruno from "../images/bruno.png";
import Erika from "../images/erika.png";
import Gary from "../images/gary.webp";
import Giovanni from "../images/giovanni.png";
import Koga from "../images/koga.webp";
import Lorelei from "../images/lorelei.webp";
import Misty from "../images/misty.png";
import Sabrina from "../images/Sabrina.webp";
import Surge from "../images/surge.png";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Trainer = () => {
  const [trainerImg, setTrainerImg] = useState(0);
  const [trainerInfo, setTrainerInfo] = useState({
    name: "Ash Ketchum",
    age: "10",
    gender: "Male",
    height: "4'10''",
    weight: "100 lbs",
    type: "Electric",
    trainerImg: "0",
  });
  const { register, handleSubmit, watch, errors } = useForm();
  const TRAINERS = [
    Ash,
    Lance,
    Blaine,
    Agatha,
    Brock,
    Bruno,
    Erika,
    Gary,
    Giovanni,
    Koga,
    Lorelei,
    Misty,
    Sabrina,
    Surge,
  ];

  // useEffect(() => {
  // setTrainerImg(0);
  // });

  const nextImg = () => {
    if (trainerImg != TRAINERS.length - 1) setTrainerImg(trainerImg + 1);
    else setTrainerImg(0);
  };

  const onSubmit = (data) => {
    console.log(data);
    setTrainerInfo({ ...data, trainerImg: trainerImg });
    console.log(trainerInfo);
  };

  const testFunction = async () => {
    const berry = await fetch(`https://pokeapi.co/api/v2/berry/1`);
    const jsonBerry = await berry.json();
    console.log(jsonBerry);
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <TrainerContainer>
        <AvatarContainer>
          <Image src={TRAINERS[trainerImg]} />
          <Button onClick={nextImg}>Next</Button>
        </AvatarContainer>
        <InfoContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <P>Name:</P>
            <Input name="name" defaultValue="Ash Ketchum" ref={register} />
            <P>Age:</P>
            <Input name="age" defaultValue="10" ref={register} />
            <P>Gender:</P>
            <Input name="gender" defaultValue="Male" ref={register} />
            <P>Height:</P>
            <Input name="height" defaultValue="4'10''" ref={register} />
            <P>Weight:</P>
            <Input name="weight" defaultValue="100 lbs" ref={register} />
            <P>Type:</P>
            <div>
              <Input name="type" defaultValue="Electric" ref={register} />
            </div>
            <SaveInput type="submit" value="Save" />
          </form>
        </InfoContainer>
      </TrainerContainer>
      <Description>
        Hey there! My name is {trainerInfo.name}. I'm {trainerInfo.age} years
        old and I'm from Pallet Town!{" "}
      </Description>
      <Button onClick={testFunction}>Test</Button>
    </>
  );
};

export default Trainer;

const TrainerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #a5a5a5;
  height: 60vh;
`;

const Input = styled.input`
  width: 25vw;
  height: 4vh;
  margin: 4px;
  font-size: 18px;
  border-radius: 8px;
`;

const P = styled.p`
  margin-top: 13px;
`;

const SaveInput = styled.input`
  width: 15vw;
  height: 3vh;
  margin-top: 12px;
  background-color: #ffff00;
`;

const InfoContainer = styled.div`
  padding-top: 0.5rem;
`;

const Description = styled.div`
  background-color: #a5a5a5;
  height: 20vh;
`;
const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

const Image = styled.img`
  height: 50vh;
  width: 50vw;
  border: 1px solid black;
  border-radius: 2px;
  margin-left: 1rem;
`;

const Button = styled.button`
  margin: 1rem;
  width: 80px;
  height: 30px;
  border-radius: 10px;
`;
