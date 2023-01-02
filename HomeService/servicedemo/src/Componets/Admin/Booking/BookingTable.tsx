import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { getbookingdata } from "../../../store/bookingSlice";
import { useEffect } from "react";
import {useAppdispatch,useAppselector} from "../../../hooks"
import "../../../styles/style.css";

interface Column {
  id:
    | "UserName"
    | "ContactNumber"
    | "BillingAddress"
    | "DeliveryAddress"
    | "Date"
    | "Time"
    | "Pincode"
    | "ServiceName"
    | "ServiceCharge"
    | "Status";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "UserName", label: "USERNAME" },
  {
    id: "ContactNumber",
    label: "CONTACTNUMBER",
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  { id: "BillingAddress", label: "BILLINGADDRESS" },
  { id: "DeliveryAddress", label: "DELIVERYADDRESS" },
  { id: "Date", label: "DATE" },
  { id: "Time", label: "TIME" },
  { id: "Pincode", label: "PINCODE" },
  { id: "ServiceName", label: "SERVICENAME" },
  { id: "ServiceCharge", label: "SERVICECHARGE" },
  { id: "Status", label: "STATUS" },
];

export default function BookingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowsData, setRowsData] = React.useState([]);
  const dispatch = useAppdispatch();
  const statebookingdata = useAppselector((state) => state.booking);
   useEffect(() => {
    dispatch(getbookingdata());
  }, []);

  useEffect(() => {
    if (statebookingdata?.getbookingData) {
      setRowsData(statebookingdata.getbookingData);
    }
  }, [statebookingdata]);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper
        className="paperbookingtable"
      >
        <TableContainer >
          <Table stickyHeader aria-label="sticky table">
            <TableHead role="tablehead">
              <TableRow className="tablerow" role="tablerow">
                {columns.map((column) => (
                  <TableCell
                    className="textfiealdstyle"
                    role="tablecell"
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {[...rowsData]
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((column: any) => (
                  <TableRow hover role="row">
                    <TableCell key={"UserName"}>{column.name}</TableCell>{" "}
                    <TableCell key={"ContactNumber"}>
                      {column.contactnumber}
                    </TableCell>
                    <TableCell key={"BillingAddress"}>
                      {column.billingaddress}
                    </TableCell>{" "}
                    <TableCell key={"DeliveryAddress"}>
                      {column.deliveryadress}
                    </TableCell>
                    <TableCell  key={"Date"}>{column.date}</TableCell >{" "}
                    <TableCell key={"Time"}>{column.time}</TableCell>
                    <TableCell key={"Pincode"}>{column.city}</TableCell>{" "}
                    <TableCell key={"ServiceName"}>
                      {column.servicename}
                    </TableCell>
                    <TableCell key={"ServiceCharge"}>{column.charge}</TableCell>{" "}
                    <TableCell key={"Status"}>{column.status}</TableCell>
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
