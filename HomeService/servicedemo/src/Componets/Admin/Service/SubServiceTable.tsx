import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";
import { useAppdispatch, useAppselector } from "../../../hooks";
import SubServiceEdit from "../Service/SubServiceEdit";
import { AnyAaaaRecord } from "dns";
import "../../../styles/style.css";
import SubServiceDelete from "../Service/SubServiceDelete";
import {
  deleteSubcategory,
  getsubcategoryall,
} from "../../../store/categorySlice";

interface Column {
  id: "MainService" | "ServiceName" | "Decription" | "Edit" | "Delete";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "MainService", label: "MainService", minWidth: 170 },
  { id: "ServiceName", label: "ServiceName", minWidth: 100 },
  {
    id: "Decription",
    label: "Decription",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  { id: "Edit", label: "Edit" },
  { id: "Delete", label: "Delete" },
];

interface Data {
  MainService: string;
  ServiceName: string;
  Decription: string;
}

export default function StickyHeadTable() {
  let data = "";
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowsData, setRowsData] = React.useState([]);
  const dispatch = useAppdispatch();
  const servicestate = useAppselector((state) => state.category);

  useEffect(() => {
    dispatch(getsubcategoryall());
  }, [
    servicestate.createsubCategory?.data,
    servicestate.deletesubCategory,
    servicestate?.editsubCategory?.edit,
  ]);

  useEffect(() => {
    if (servicestate?.getsubCategoryAll) {
      setRowsData(servicestate?.getsubCategoryAll);
    }
  }, [servicestate]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Paper className="paper">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow className="tablerow">
                {columns.map((column) => (
                  <TableCell className="textfiealdstyle">
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
             {[...rowsData]
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((column: any) => (
                <TableRow hover role="checkbox">
                  <TableCell key={"MainService"}>
                    {column.mainservice}
                  </TableCell>
                  <TableCell key={"ServiceName"}>
                    {column.servicename}
                  </TableCell>{" "}
                  <TableCell key={"Decription"}>{column.decription}</TableCell>
                  <TableCell key={"Edit"}>
                    {
                      <SubServiceEdit
                        id={column?._id}
                        servicename={column?.servicename}
                        decription={column?.decription}
                        url={column?.url}
                      />
                    }
                  </TableCell>
                  <TableCell key={"Delete"}>
                    {
                      <SubServiceDelete id={column?._id} />
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
           
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 5, 100]}
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
