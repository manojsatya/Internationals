import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TableMatUI from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";

//Check prop types
Table.propTypes = {
  members: PropTypes.array,
  handleDeleteMember: PropTypes.func
};

export default function Table({ members, handleDeleteMember }) {
  //Hooks to manage the state of the components
  const classes = useStyles();
  const history = useHistory();

  return (
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
        <TableBody>
          {members.map(member => (
            <TableRow key={member._id} className={classes.rows}>
              <TableCell align="center" className={classes.cell}>
                {member.name}
              </TableCell>
              <TableCell align="center" className={classes.cell}>
                {member.country}
              </TableCell>
              <TableCell align="center" className={classes.cell}>
                {member.friends.length}
              </TableCell>
              <TableCell align="center" className={classes.cell}>
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
                <button
                  className={classes.deleteButton}
                  onClick={() => handleDelete(member._id)}
                >
                  Remove
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMatUI>
    </Paper>
  );

  //function to redirect of profile page of selected member when "view profile" is clicked
  function handleViewProfile(id) {
    history.push("/profile/" + id);
  }

  //function to redirect to define page when "add friend" is clicked
  function handleAddFriend(id) {
    history.push("/define/" + id);
  }

  function handleDelete(id) {
    handleDeleteMember(id);
  }
}

//styling
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
    "@media(max-width: 520px)": {
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
  deleteButton: {
    backgroundColor: "red",
    borderRadius: "0.4rem",
    height: "25px",
    outline: "none",
    color: "white"
  }
});
