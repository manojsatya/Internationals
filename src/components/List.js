import React, { useState, useEffect } from "react";
import Title from "./Title";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { getMembers, deleteMember } from "./services/services";
import Table from "./Table";

export default function List() {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  useEffect(() => {
    getMembers().then(setMembers);
  }, []);

  const filterMembers = members
    .filter(
      member => member.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    )
    .filter(
      member =>
        member.country.toLowerCase().indexOf(country.toLowerCase()) !== -1
    );

  return (
    <div>
      <Title />
      <SearchBarStyled>
        <InputStyled
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        <section>
          <LabelStyled>Search by country of origin:</LabelStyled>
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
        </section>
        <ClearButtonStyled onClick={handleClearSearch}>
          Clear search
        </ClearButtonStyled>
      </SearchBarStyled>
      <Table members={filterMembers} handleDeleteMember={handleDeleteMember} />
      <AddLinkStyled to="/add">Click to Add International</AddLinkStyled>
    </div>
  );

  function handleDeleteMember(id) {
    console.log("From List file", id);
    deleteMember(id);
  }

  function handleClearSearch() {
    setSearch("");
    setCountry("");
  }
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

const InputStyled = styled.input`
  height: 25px;
  width: 25%;
  border-radius: 0.3rem;
`;
const LabelStyled = styled.label`
  margin: 10px;
`;
const SelectStyled = styled.select`
  width: 120px;
  height: 25px;
  outline: none;
  font-size: 1.1rem;
`;

const ClearButtonStyled = styled.button`
  background-color: #22e0cd;
  border-radius: 0.4rem;
  height: 25px;
  outline: none;
  width: 80px;
`;

const SearchBarStyled = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;
