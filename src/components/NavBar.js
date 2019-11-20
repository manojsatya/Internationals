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
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px;
  }
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const NavLinkStyled = styled(NavLink)`
  @media only screen and (min-width: 768px) {
    text-decoration: none;
    font-size: 1.5rem;
    padding: 20px;
    color: black;
    &:hover {
      text-decoration: underline;
    }
    &.active {
      background-color: var(--colorTheme);
      border-radius: 0.5rem;
    }
  }
  text-decoration: none;
  font-size: 1rem;
  padding: 6px;
  color: black;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    background-color: var(--colorTheme);
    border-radius: 0.5rem;
  }
`;
