import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { getservice, deletemainservice } from "../../../store/action/service";
import service from "../../../store/Reducer/service";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MainServiceEdit from "../Service/MainServiceEdit";
import "../../../styles/demo.css";
import MainServiceDelete from "../Service/MainServiceDelete";

interface Column {
  id: "ServiceName" | "Decription" | "Edit" | "Delete";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "ServiceName", label: "ServiceName" },
  {
    id: "Decription",
    label: "Decription",
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  { id: "Edit", label: "Edit" },
  { id: "Delete", label: "Delete" },
];

interface Data {
  ServiceName: string;
  Decription: string;
}

export default function MainServiceTable() {
  const [page, setPage] = React.useState(0);
  const [deletestate, setdelete] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowsData, setRowsData] = React.useState([]);
  const dispatch = useDispatch<any>();
  const servicestate = useSelector((state: any) => state.service);

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
    dispatch(getservice);
  }, [servicestate?.mainservicedata]);

  function setdele(id: any) {
    dispatch(deletemainservice(id));
    dispatch(getservice);
  }
  useEffect(() => {
    if (servicestate?.mainservicedata) {
      setRowsData(servicestate.mainservicedata);
    }
  }, [servicestate]);

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden", margin: "20px" }}>
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
                  <TableCell key={"ServiceName"}>
                    {column.servicename}
                  </TableCell>{" "}
                  <TableCell key={"Decription"}>{column.decription}</TableCell>
                  <TableCell key={"Edit"}>
                    {
                      <MainServiceEdit
                        id={column?._id}
                        servicename={column?.servicename}
                        decription={column?.decription}
                        url={column?.url}
                      />
                    }
                  </TableCell>
                  <TableCell key={"Delete"}>
                    {<MainServiceDelete id={column?._id} />}
                  </TableCell>
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
