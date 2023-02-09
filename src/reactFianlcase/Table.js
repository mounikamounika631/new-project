import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Button, Container } from 'react-bootstrap';
import Modal2 from './Modal2';

import { useState } from 'react';
import EditItem from './EditItem';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

//  const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//  ];




export default function CustomizedTables() {

  const [selectdata, setSelectData] = useState({})
  const [idx, setIdx] = useState()
  const [openEdit,setOpenEdit] = useState(false)
  const [edit, setEdit] = useState({})
 let passIndex=(index)=>{
    setIdx(index)
  }
   let passData=(courses)=>{
  setSelectData(courses);
  }


  let ls = localStorage.getItem("courses")

let local =ls ? JSON.parse(ls):[]

let deleteData=(index)=>
{
   
    
    local.splice(index,1)
    localStorage.setItem("courses",JSON.stringify(local))
}
let modalEditOpen=(data)=>
{
  setOpenEdit(true);
  setEdit(data);
}

  
  return (
    <div>
    <Container className='model'>
    <TableContainer component={Paper}>
      <Modal2 />
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name </StyledTableCell>
            <StyledTableCell align="right">plan</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Extension</StyledTableCell>
         </TableRow>
        </TableHead>
        <TableBody>
          {local.map((courses,index) => (
            <StyledTableRow key={courses.name}>
              <StyledTableCell component="th" scope="row">
                {courses.name}
              </StyledTableCell>
              <StyledTableCell align="right">{courses.plan}</StyledTableCell>
              <StyledTableCell align="right">{courses.date}</StyledTableCell>
              <StyledTableCell align="right">{courses.price}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={()=>{passData(courses);passIndex(index);modalEditOpen()}} >edit</Button>&nbsp; <Button onClick={()=>{deleteData(index)}}>delete</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    {openEdit&&<EditItem 
    open={openEdit}
    setopenedit={setOpenEdit}
    edit={edit}
    idx={idx}
    selectdata={selectdata}
    />

    }
    </div>
  );
}