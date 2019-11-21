import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getMember,
  getMemberFriends,
  removeFriendship
} from "./services/services";
import Title from "./Title";
import styled from "styled-components/macro";
import { makeStyles } from "@material-ui/core/styles";
import TableMatUI from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";

export default function Profile() {
  //Hooks to manage the state of the component
  const { id } = useParams();
  const classes = useStyles();
  const history = useHistory();
  const [profile, setProfile] = useState([]);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    getMember(id).then(profile => setProfile(profile[0]));
    getMemberFriends(id).then(friends => setFriends(friends));
  }, [id]);

  return (
    <ProfileStyled>
      <Title />
      <HeadlineStyled>{profile.name}'s profile </HeadlineStyled>
      <DetailsStyled>
        <h3>Country of Origin: {profile.country}</h3>
        <h3>Number of friends: {friends.length}</h3>
      </DetailsStyled>
      <HeadlineStyled>{profile.name}'s friends</HeadlineStyled>

      {friends.length > 0 && (
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
              {friends.map(friend => (
                <TableRow key={friend._id} className={classes.rows}>
                  <TableCell align="center" className={classes.cell}>
                    {friend.name}
                  </TableCell>
                  <TableCell align="center" className={classes.cell}>
                    {friend.country}
                  </TableCell>
                  <TableCell align="center" className={classes.cell}>
                    <button
                      className={classes.profileButton}
                      onClick={() => handleViewProfile(friend._id)}
                    >
                      View profile
                    </button>
                    <button
                      className={classes.unfriendButton}
                      onClick={() => handleUnfriend(id, friend)}
                    >
                      Unfriend
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableMatUI>
        </Paper>
      )}
    </ProfileStyled>
  );

  //function to redirect to profile page of member when "view profile" is clicked
  function handleViewProfile(id) {
    history.push("/profile/" + id);
  }

  function handleUnfriend(profileId, friend) {
    removeFriendship(profileId, friend).then(setFriends);
  }
}

//styling
const ProfileStyled = styled.div`
  margin-top: 120px;
`;
const HeadlineStyled = styled.h2`
  text-align: center;
  color: var(--colorTheme);
  @media only screen and (max-width: 620px) {
    font-size: 1.2rem;
  }
`;

const DetailsStyled = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto 20px;
  h3 {
    margin: 10px;
    @media only screen and (max-width: 620px) {
      font-size: 0.8rem;
    }
  }
`;

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

    "@media(max-width: 450px)": {
      fontSize: "0.6rem"
    }
  },
  addButton: {
    backgroundColor: "green",
    borderRadius: "0.4rem",
    height: "25px",
    outline: "none",
    color: "white"
  },
  unfriendButton: {
    backgroundColor: "red",
    borderRadius: "0.4rem",
    height: "25px",
    outline: "none",
    color: "white"
  }
});
