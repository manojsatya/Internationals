import React, { useState, useEffect } from "react";
import Title from "./Title";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { getMembers } from "./services/services";
import Table from "./Table";

export default function List() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers().then(setMembers);
  }, []);
  return (
    <div>
      <Title />
      {/* <h2>List of Internationals</h2> */}
      <Table members={members} />
      <AddLinkStyled to="/add">Click to Add International</AddLinkStyled>
    </div>
  );
}

const AddLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  width: 250px;
  text-decoration: none;
  padding: 10px;
  border: 1px solid black;
  border-radius: 1rem;
  margin: 20px;
  :hover {
    background-color: #22e0cd;
  }
`;
