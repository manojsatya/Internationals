import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export default function NavBar() {
  return (
    <NavBarStyled>
      <NavLinkStyled exact to="/">
        List
      </NavLinkStyled>
      <NavLinkStyled to="/add">Add International</NavLinkStyled>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
  padding: 20px;
  color: black;
  &:hover {
    color: blue;
    text-decoration: underline;
  }
  &.active {
    text-decoration: underline;
    text-decoration-color: #22e0cd;
  }
`;
