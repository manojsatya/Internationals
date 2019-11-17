// import React from "react";
// import styled from "styled-components/macro";

// export default function Table({ members }) {
//   return (
//     <div>
//       <ShowHeader />
//       {members.map(member => {
//         return <ShowTable key={member._id} {...member} />;
//       })}
//     </div>
//   );
// }

// function ShowTable({ _id, name, country }) {
//   return (
//     <TableStyled>
//       <tbody>
//         <tr>
//           <td>{name}</td>
//           <td>{country}</td>
//         </tr>
//       </tbody>
//     </TableStyled>
//   );
// }

// function ShowHeader() {
//   return (
//     <TableStyled>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Country</th>
//         </tr>
//       </thead>
//     </TableStyled>
//   );
// }

// const TableStyled = styled.table`
//   text-align: center;
//   width: 80%;
//   border-collapse: collapse;
//   border: 1px solid black;
//   td,
//   th {
//     padding: 8px;
//     border: 1px solid black;
//   }
//   th {
//     padding-top: 12px;
//     padding-bottom: 12px;
//     background-color: #4caf50;
//     color: white;
//   }
//   tr:hover {
//     background-color: #f2f2f2;
//   }
//   tr:nth-child(even) {
//     background-color: #f2f2f2;
//   }
// `;
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableMatUI from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
    margin: "10px"
  },
  addButton: {
    backgroundColor: "green",
    borderRadius: "0.4rem",
    height: "25px",
    outline: "none"
  }
});

export default function Table({ members }) {
  const classes = useStyles();

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
        <TableBody className={classes.rows}>
          {members.map(member => (
            <TableRow key={member._id}>
              <TableCell align="center">{member.name}</TableCell>
              <TableCell align="center">{member.country}</TableCell>
              <TableCell align="center">{member.friends.length}</TableCell>
              <TableCell align="center">
                <button
                  className={classes.profileButton}
                  onClick={() => console.log(member._id)}
                >
                  View Profile
                </button>
                <button
                  className={classes.addButton}
                  onClick={() => console.log(member._id)}
                >
                  Add friend
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMatUI>
    </Paper>
  );
}
