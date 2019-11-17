import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMember, getMemberFriends } from "./services/services";
import Title from "./Title";
import styled from "styled-components/macro";

export default function Profile() {
  const { id } = useParams();
  const [profile, setProfile] = useState([]);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    getMember(id).then(profile => setProfile(profile[0]));
    getMemberFriends(id).then(friends => setFriends(friends));
  }, [id]);
  //   console.log(profile);
  return (
    <>
      <Title />
      <HeadlineStyled>{profile.name}'s profile </HeadlineStyled>
      <h3>Country of Origin: {profile.country}</h3>
      <h3>Number of friends: {friends.length}</h3>
      <h3>{profile.name}'s friends</h3>
    </>
  );
}

const HeadlineStyled = styled.h2`
  text-align: center;
`;
