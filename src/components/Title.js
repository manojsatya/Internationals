import React from "react";
import styled from "styled-components/macro";
import NavBar from "./NavBar";

export default function Title() {
  return (
    <TitleStyled>
      <HeaderStyled>Internationals</HeaderStyled>
      <NavBar />
    </TitleStyled>
  );
}

const HeaderStyled = styled.section`
  font-family: sans-serif;
  color: var(--colorTheme);
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 3rem;
    margin: 20px;
    padding: 0;
  }

  font-size: 2rem;
  margin: 10px;
  padding: 0;
`;

const TitleStyled = styled.div`
  position: fixed;
  background-color: white;
  top: 0;
  display: flex;
  width: 100%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15), 0 2px 10px rgba(0, 0, 0, 0.25);
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 100px;
  }
  flex-direction: column;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15), 0 2px 10px rgba(0, 0, 0, 0.25);
`;
