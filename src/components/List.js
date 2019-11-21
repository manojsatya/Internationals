import React, { useState, useEffect } from "react";
import Title from "./Title";
import styled from "styled-components/macro";
import { getMembers, deleteMember } from "./services/services";
import Table from "./Table";

export default function List() {
  //Hooks to manage the state of the component
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  useEffect(() => {
    getMembers().then(setMembers);
  }, []);

  //filter members when search query is used for name or/and country selected by drop down
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
        <SelectSectionStyled>
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
        </SelectSectionStyled>
        <ClearButtonStyled onClick={handleClearSearch}>
          Clear search
        </ClearButtonStyled>
      </SearchBarStyled>
      {members.length === 0 && (
        <HeadlineStyled>
          Click Add International to add International
        </HeadlineStyled>
      )}
      {members.length > 0 && (
        <Table
          members={filterMembers}
          handleDeleteMember={handleDeleteMember}
        />
      )}
      {/* <AddLinkStyled to="/add">Click to Add International</AddLinkStyled> */}
    </div>
  );

  function handleDeleteMember(id) {
    deleteMember(id).then(setMembers);
  }

  //function to clear search queries
  function handleClearSearch() {
    setSearch("");
    setCountry("");
  }
}

//styling

const HeadlineStyled = styled.h2`
  text-align: center;
  color: var(--colorTheme);
`;

const InputStyled = styled.input`
  height: 25px;
  width: 25%;
  border-radius: 0.3rem;
  border: 1px solid var(--colorTheme);
  @media only screen and (max-width: 620px) {
    width: 80%;
    margin: 0 auto;
  }
`;
const LabelStyled = styled.label`
  margin: 10px;
  @media only screen and (max-width: 620px) {
    font-size: 0.8rem;
  }
`;
const SelectStyled = styled.select`
  width: 120px;
  outline: none;
  font-size: 1.1rem;
  @media only screen and (max-width: 620px) {
    font-size: 0.8rem;
  }
`;

const SelectSectionStyled = styled.section`
  @media only screen and (max-width: 620px) {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 5px auto;
  }
`;

const ClearButtonStyled = styled.button`
  background-color: var(--colorTheme);
  border-radius: 0.4rem;
  height: 25px;
  outline: none;
  @media only screen and (max-width: 620px) {
    margin: 0 auto;
    width: 80%;
  }
`;

const SearchBarStyled = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px auto;
  width: 70%;
  margin-top: 120px;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
  @media only screen and (max-width: 620px) {
    flex-direction: column;
  }
`;
