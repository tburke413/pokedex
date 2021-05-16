import React, { useState, useEffect } from "react";
import { ProfileContainer, BigSprite } from "./ProfileElements";
import { padZero, cap } from "../../utils";

const Profile = ({ selected, data, bgc }) => {
  const weight = data.weight * 0.2204623;
  const height = data.height * 3.937008;
  const feet = height / 12;
  const inches = height % 12;

  const [profileData, setProfileData] = useState(["."]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${data.id}`
        );

        let fetchedProfile = await response.json();
        console.log(fetchedProfile);
        setProfileData(fetchedProfile);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProfile();
  }, []);

  return (
    <ProfileContainer>
      <h1>#{padZero(selected)}</h1>
      <h1>{cap(data.name)}</h1>
      <BigSprite src={data.sprite_front_default} />
      {data.types.map((t, index) => {
        return <h2 key={index}>{cap(t.type.name)}</h2>;
      })}
      <h3>
        Height: {feet.toFixed(0)}' {inches.toFixed(0)}"
      </h3>
      <h3>Weight: {weight.toFixed(0)} lbs</h3>
      {isLoaded && <h3>{profileData.flavor_text_entries[0].flavor_text}</h3>}
    </ProfileContainer>
  );
};

export default Profile;
