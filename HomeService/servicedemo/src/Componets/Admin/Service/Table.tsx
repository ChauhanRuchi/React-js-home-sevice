import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {getsubserviceall} from "../../../Redux/action/service"
import service from "../../../Redux/Reducer/service"
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";


interface Column {
  id: 'MainService' | 'ServiceName' | 'Decription' | 'URl' ;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'MainService', label: 'MainService', minWidth: 170 },
  { id: 'ServiceName', label: 'ServiceName', minWidth: 100 },
  {
    id: 'Decription',
    label: 'Decription',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'URl',
    label: 'URl',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },

];

interface Data {
  MainService: string;
  ServiceName: string;
  Decription: string;
  URl: string;
}

function createData(
  MainService: string,
  ServiceName: string,
  Decription: string,
  URl: string,
): Data {
  return { MainService, ServiceName, Decription, URl };
}



export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch<any>();
  const servicestate = useSelector((state: any) => state.service);
  console.log(servicestate.subservicedataall)
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(()=>
  {
    dispatch(getsubserviceall)
  },[])
  return (
    <>
     <Paper sx={{ width: '100%', overflow: 'hidden' ,margin:"30px"}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
           
                  <TableRow hover role="checkbox" >
                   
                        <TableCell key={"MainService"}>
                          {"fggg"}
                        </TableCell>
                        <TableCell key={"ServiceName"}>
                          {"gh"}
                        </TableCell> <TableCell key={"Decription"}>
                          {"fggg"}
                        </TableCell>
                      
                  </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
   
  );
}

