import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ViewBreweryModal from "./ViewBreweryModal";

const BreweriesTable = ({ tableData }) => {
  const [viewBreweryItem, setViewBreweryItem] = useState(false);

  const handleCellClick = (rowItem) => {
    setViewBreweryItem(rowItem);
  };

  const onModalClose = () => {
    setViewBreweryItem(null);
  };

  return (
    <>
      <ViewBreweryModal
        viewBreweryItem={viewBreweryItem}
        handleClose={onModalClose}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Country</TableCell>
              <TableCell align="center">Street</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  onClick={() => {
                    handleCellClick(row);
                  }}
                  component="th"
                  scope="row"
                  sx={{ cursor: "pointer" }}
                >
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.brewery_type}</TableCell>
                <TableCell align="center">{row.country}</TableCell>
                <TableCell align="center">{`${row.street ? row.street : ""} ${
                  row.city
                }`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BreweriesTable;
