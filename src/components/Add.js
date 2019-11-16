import React from "react";
import Title from "./Title";
import styled from "styled-components/macro";

export default function Add() {
  return (
    <div>
      <Title />
      <FormStyled>
        <label>Enter a name:</label>
        <InputStyled type="text" name="name" placeholder="Enter a name..." />
        <label>Country of origin:</label>
        <select>
          <option value="germany">Germany</option>
          <option value="spain">Spain</option>
          <option value="italy">Italy</option>
          <option value="turkey">Turkey</option>
          <option value="india">India</option>
        </select>
        <button type="submit">Add</button>
      </FormStyled>
    </div>
  );
}

const InputStyled = styled.input`
  width: 200px;
  height: 30px;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-around;
  max-width: 300px;
`;
