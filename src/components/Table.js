import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableMatUI from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";

export default function Table({ members, handleDeleteMember }) {
  //Hooks to manage the state of the components
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
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
                NUMBER OF FRIENDS
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
                <TableCell align="center">{member.friends.length}</TableCell>
                <TableCell align="center">
                  <button
                    className={classes.profileButton}
                    onClick={() => handleViewProfile(member._id)}
                  >
                    View profile
                  </button>
                  <button
                    className={classes.addButton}
                    onClick={() => handleAddFriend(member._id)}
                  >
                    Add friend
                  </button>
                  {/* <button
                  className={classes.deleteButton}
                  onClick={() => handleDelete(member._id)}
                >
                  Delete
                </button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableMatUI>
      </Paper>
    </>
  );

  //function to redirect of profile page of selected member when "view profile" is clicked
  function handleViewProfile(id) {
    history.push("/profile/" + id);
  }

  //function to redirect to define page when "add friend" is clicked
  function handleAddFriend(id) {
    history.push("/define/" + id);
  }

  //   function handleDelete(id) {
  //     console.log("From Table file", id);
  //     handleDeleteMember(id);
  //   }
}

//styling
const useStyles = makeStyles({
  root: {
    width: "80%",
    // overflowX: "auto",
    margin: "0 auto",
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
