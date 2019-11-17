import React, { useState, useEffect } from "react";
import Title from "./Title";
import { useParams } from "react-router-dom";
import { getMember, getMembers } from "./services/services";
import styled from "styled-components/macro";
import { makeStyles } from "@material-ui/core/styles";
import TableMatUI from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function Define() {
  const { id } = useParams();
  const classes = useStyles();
  const [member, setMember] = useState([]);
  useEffect(() => {
    getMember(id).then(profile => setMember(profile[0]));
  }, [id]);
  const [members, setMembers] = useState([]);
  useEffect(() => {
    getMembers().then(setMembers);
  }, []);
  return (
    <div>
      <Title />
      <HeadlineStyled>Define friendships for {member.name}</HeadlineStyled>
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
            {members.map(member => (
              <TableRow key={member._id}>
                <TableCell align="center">{member.name}</TableCell>
                <TableCell align="center">{member.country}</TableCell>
                <TableCell align="center">
                  <button
                    className={classes.profileButton}
                    // onClick={() => handleViewProfile(member._id)}
                  >
                    Add
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableMatUI>
      </Paper>
    </div>
  );
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
