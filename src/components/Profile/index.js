import React from "react";
import { ProfileContainer, BigSprite } from "./ProfileElements";
import { padZero, cap } from "../../utils";

const Profile = ({ selected, data, bgc }) => {
  return (
    <>
      <ProfileContainer>
        <h1>#{padZero(selected)}</h1>
        <h1>{cap(data.name)}</h1>
        <BigSprite src={data.sprites.front_default} />
        {data.types.map((t, index) => {
          return <h2 key={index}>{cap(t.type.name)}</h2>;
        })}
      </ProfileContainer>
    </>
  );
};

export default Profile;
