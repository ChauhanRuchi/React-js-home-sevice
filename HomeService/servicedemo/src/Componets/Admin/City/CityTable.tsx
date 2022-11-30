import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { clearcityState, getcityname } from "../../../store/bookingSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MainServiceEdit from "../Service/MainServiceEdit";
import "../../../styles/demo.css";

interface Column {
  id: "CityName" | "Pincode";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "CityName", label: "CITYNAME" },
  {
    id: "Pincode",
    label: "PINCODE",
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

interface Data {
  CITYNAME: string;
  PASSWORD: string;
}

export default function UserTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowsData, setRowsData] = React.useState([]);
  const dispatch = useDispatch<any>();
  const citydata = useSelector((state: any) => state.booking);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    dispatch(getcityname());

    dispatch(clearcityState());
  }, [, citydata?.setcityData?.create]);

  useEffect(() => {
    if (citydata?.getcityName) {
      setRowsData(citydata.getcityName);
    }
  }, [citydata]);
  console.log("...row", rowsData);
  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden", margin: "30px" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow style={{ background: "#214758" }}>
                {columns.map((column) => (
                  <TableCell
                    className="textfiealdstyle"
                    style={{ background: "#214758", color: "#fff" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {[...rowsData]?.map((column: any) => (
                <TableRow hover role="checkbox">
                  <TableCell key={"CityName"}>{column.name}</TableCell>{" "}
                  <TableCell key={"Pincode"}>{column.pincode}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rowsData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
