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
  color: #22e0cd;
  font-size: 3rem;
  text-align: center;
  margin: 20px;
  padding: 0;
`;

const TitleStyled = styled.div`
  position: fixed;
  background-color: white;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15), 0 2px 10px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100px;
`;
