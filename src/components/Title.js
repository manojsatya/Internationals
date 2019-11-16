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
  font-size: 3rem;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const TitleStyled = styled.div`
  background-color: whitesmoke;
  width: 100%;
`;
