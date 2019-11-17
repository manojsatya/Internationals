import React, { useState } from "react";
import Title from "./Title";
import styled from "styled-components/macro";
import { postMember } from "./services/services";
import { useHistory } from "react-router-dom";

export default function Add() {
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [nameWarning, setNameWarning] = useState("");
  const [countryWarning, setCountryWarning] = useState("");
  const history = useHistory();
  return (
    <div>
      <Title />
      <FormStyled onSubmit={handleSubmit}>
        <section>
          <LabelStyled>Enter a name:</LabelStyled>
          <InputStyled
            type="text"
            name="name"
            placeholder="Enter a name..."
            autoComplete="off"
            autoFocus
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <FormWarnings>{nameWarning}</FormWarnings>
        </section>
        <section>
          <LabelStyled>Country of origin:</LabelStyled>
          <SelectStyled
            onChange={event => setCountry(event.target.value)}
            value={country}
            name="country"
          >
            <option value="">Select here</option>
            <option value="Germany">Germany</option>
            <option value="Spain">Spain</option>
            <option value="Italy">Italy</option>
            <option value="Turkey">Turkey</option>
            <option value="India">India</option>
            <option value="France">France</option>
            <option value="Greece">Greece</option>
            <option value="China">China</option>
            <option value="Portugal">Portugal</option>
            <option value="Argentina">Argentina</option>
          </SelectStyled>
          <FormWarnings>{countryWarning}</FormWarnings>
        </section>
        <button type="submit">Add</button>
      </FormStyled>
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    if (data.name === "") {
      setNameWarning("*Please enter name");
    } else if (data.country === "") {
      setNameWarning("");
      setCountryWarning("*Please select the country");
    } else {
      setNameWarning("");
      setCountryWarning("");
      // console.log(data);
      postMember(data);
      form.reset();
      setName("");
      setCountry("");
      history.push("/");
    }
  }
}

const InputStyled = styled.input`
  width: 200px;
  height: 30px;
`;

const FormStyled = styled.form`
  display: grid;
  grid-gap: 30px;
  grid-template-rows: 40px 40px 40px;
  margin: 10px auto;
  justify-content: space-around;
  max-width: 500px;
`;

const LabelStyled = styled.label`
  margin: 10px;
`;

const SelectStyled = styled.select`
  width: 120px;
  height: 30px;
  outline: none;
  font-size: 1.1rem;
`;

const FormWarnings = styled.p`
  color: red;
`;
