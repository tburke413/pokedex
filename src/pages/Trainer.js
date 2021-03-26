import React from "react";
import styled from "styled-components";
import Lance from "../images/lance.webp";
import Ash from "../images/ash.png";
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

const Trainer = () => {
  const [trainerNum, setTrainerNum] = useState(0);

  const TRAINERS = [
    Lance,
    Ash,
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
  // setTrainerNum(0);
  // });

  const nextImg = () => {
    if (trainerNum != TRAINERS.length - 1) setTrainerNum(trainerNum + 1);
    else setTrainerNum(0);
  };

  return (
    <TrainerContainer>
      <AvatarContainer>
        <Image src={TRAINERS[trainerNum]} />
        <Button onClick={nextImg}>Select Next Trainer</Button>
      </AvatarContainer>
      <InfoContainer>
        NAME: AGE: GENDER: HEIGHT: WEIGHT: TRAINER TYPE:
      </InfoContainer>
    </TrainerContainer>
  );
};

export default Trainer;

const TrainerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #a5a5a5;
  height: 80vh;
  padding-top: 2rem;
`;

const InfoContainer = styled.div``;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  height: 50vh;
  width: 50vw;
`;

const Button = styled.button`
  margin: 1rem;
  width: 130px;
  height: 30px;
  border-radius: 10px;
`;
