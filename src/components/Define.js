import React, { useState, useEffect } from "react";
import Title from "./Title";
import { useParams } from "react-router-dom";
import {
  getMember,
  getMembers,
  addFriendship,
  getMemberFriends
} from "./services/services";
import styled from "styled-components/macro";
import { makeStyles } from "@material-ui/core/styles";
import TableMatUI from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function Define() {
  //React hooks to manage the state of this component
  const { id } = useParams();
  const classes = useStyles();
  const [profile, setProfile] = useState([]);
  const [friends, setFriends] = useState([]);
  const [members, setMembers] = useState([]);
  useEffect(() => {
    getMember(id).then(profile => setProfile(profile[0]));
    getMemberFriends(id).then(friends => setFriends(friends));
  }, [id]);
  useEffect(() => {
    getMembers().then(setMembers);
  }, []);

  //filter members who are not friends with the member selected
  const membersNotFriends = members.filter(
    member => !friends.find(friend => member._id === friend._id)
  );

  //filter out selected member because one cannot define friendship with himself
  const notFriendsList = membersNotFriends.filter(self => self._id !== id);

  return (
    <DefinePageStyled>
      <Title />
      <HeadlineStyled>Define friendships for {profile.name}</HeadlineStyled>
      <Paper className={classes.root}>
        <TableMatUI className={classes.table} aria-label="simple table">
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell align="center" className={classes.headerFont}>
                NAME
              </TableCell>
              <TableCell align="center" className={classes.headerFont}>
                COUNTRY OF ORIGIN
              </TableCell>

              <TableCell align="center" className={classes.headerFont}>
                ACTION
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notFriendsList.map(member => (
              <TableRow key={member._id} className={classes.rows}>
                <TableCell align="center" className={classes.cell}>
                  {member.name}
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  {member.country}
                </TableCell>
                <TableCell align="center" className={classes.cell}>
                  <button
                    className={classes.profileButton}
                    onClick={() => handleAddFriend(member)}
                  >
                    Add
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableMatUI>
      </Paper>
    </DefinePageStyled>
  );

  //function to define friendship when add button was clicked for a particular member
  //returns the list of friends of the current member and sets it
  function handleAddFriend(member) {
    addFriendship(profile._id, member).then(friends => setFriends(friends));
  }
}

//Styling
const DefinePageStyled = styled.div`
  margin-top: 120px;
`;
const HeadlineStyled = styled.h2`
  text-align: center;
  @media only screen and (max-width: 620px) {
    font-size: 0.8rem;
  }
`;

//Table styled using MaterialUI
const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "0 auto",
    marginTop: "10px",
    "@media(max-width: 450px)": {
      textAlign: "center"
    },
    "@media(max-width: 400px)": {
      fontSize: "0.6rem"
    }
  },
  head: {
    backgroundColor: "var(--colorTheme)"
  },
  headerFont: {
    fontSize: "1.2rem",
    color: "white",
    "@media(max-width: 820px)": {
      fontSize: "1.0rem"
    },
    "@media(max-width: 450px)": {
      fontSize: "0.7rem",
      padding: "0"
    }
  },
  rows: {
    "&:hover": {
      backgroundColor: "whitesmoke"
    },
    "@media(max-width: 820px)": {
      display: "table-row"
    }
  },
  cell: {
    "@media(max-width: 450px)": {
      fontSize: "0.6rem",
      padding: "5px"
    }
  },
  profileButton: {
    backgroundColor: "var(--colorTheme)",
    borderRadius: "0.4rem",
    height: "25px",
    outline: "none",
    width: "80px",
    "@media(max-width: 450px)": {
      fontSize: "0.6rem"
    }
  },
  addButton: {
    backgroundColor: "green",
    borderRadius: "0.4rem",
    height: "25px",
    outline: "none",
    color: "white",
    width: "80px"
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: "0.4rem",
    height: "25px",
    outline: "none",
    color: "black",
    width: "80px"
  }
});
