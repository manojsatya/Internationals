import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMember, getMemberFriends } from "./services/services";
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
  const { id } = useParams();
  const classes = useStyles();
  const history = useHistory();
  const [profile, setProfile] = useState([]);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    getMember(id).then(profile => setProfile(profile[0]));
    getMemberFriends(id).then(friends => setFriends(friends));
  }, [id]);
  //   console.log(profile);
  return (
    <>
      <Title />
      <HeadlineStyled>{profile.name}'s profile </HeadlineStyled>
      <h3>Country of Origin: {profile.country}</h3>
      <h3>Number of friends: {friends.length}</h3>
      <h3>{profile.name}'s friends</h3>

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
            <TableBody className={classes.rows}>
              {friends.map(friend => (
                <TableRow key={friend._id}>
                  <TableCell align="center">{friend.name}</TableCell>
                  <TableCell align="center">{friend.country}</TableCell>
                  <TableCell align="center">
                    <button
                      className={classes.profileButton}
                      onClick={() => handleViewProfile(friend._id)}
                    >
                      View profile
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableMatUI>
        </Paper>
      )}
    </>
  );

  function handleViewProfile(id) {
    history.push("/profile/" + id);
  }
}

const HeadlineStyled = styled.h2`
  text-align: center;
`;

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
    marginTop: "10px"
  },
  table: {
    minWidth: 650
  },
  head: {
    backgroundColor: "#22e0cd"
  },
  headerFont: {
    fontSize: "1.2rem",
    color: "white"
  },
  rows: {
    padding: "30px"
  },
  profileButton: {
    backgroundColor: "#22e0cd",
    borderRadius: "0.4rem",
    height: "25px",
    outline: "none",
    width: "80px"
  }
});
