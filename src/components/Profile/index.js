import React from "react";
import { ProfileContainer, BigSprite } from "./ProfileElements";
import { padZero, cap } from "../../utils";

const Profile = ({ selected, data, bgc }) => {
  return (
    <>
      <ProfileContainer>
        <h1>#{padZero(selected)}</h1>
        <h1>{cap(data[selected - 1].name)}</h1>
        <BigSprite src={data[selected - 1].sprites.front_default} />
        {data[selected - 1].types.map((t, index) => {
          return <h2 key={index}>{cap(t.type.name)}</h2>;
        })}
      </ProfileContainer>
    </>
  );
};

export default Profile;
