import React from "react";
import Title from "./Title";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export default function List() {
  return (
    <div>
      <Title />
      <p>Hello World</p>
      <AddLinkStyled to="/add">Click to Add International</AddLinkStyled>
    </div>
  );
}

const AddLinkStyled = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  border: 1px solid black;
  border-radius: 1rem;
  margin: 20px;
  :hover {
    background-color: #93ecd8;
  }
`;
