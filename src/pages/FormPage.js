/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import { Helmet } from 'react-helmet-async';
import { filter, result } from 'lodash';
import { sentenceCase } from 'change-case';
import { useEffect, useState, useMemo } from 'react';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  TextField,
  CardContent,
} from '@mui/material';
// components
import { useLocation } from 'react-router-dom'

import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';
import { MyComponent, MyComponent2 } from '../hooks/useXMLRPClientAuthHook';
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'id', label: 'ID', alignRight: false},
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'write_date', label: 'Updated On', alignRight: false },

  { id: '' },
];

// ----------------------------------------------------------------------


export default function FormPage(props) {

  const location = useLocation();
  
  const { model, title } = props
  
  console.log(model)
  // const model = location.pathname.replace("/dashboard/", "") 


  // const [result, setResult] = useState({})
  
  const { data, error, loading } = MyComponent2(model)
  




  return (
    <>
      <Helmet>
        <title> {title} | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            ADD
          </Button>
        </Stack>

        <Card variant="outlined">
        <CardContent>

        <Stack alignItems="left" justifyContent="space-between" spacing={5}> 
          {TABLE_HEAD.map((number, idx) => {
            const number1 = number

            // return (<li key={idx}>{number.label}</li>)
            return (<TextField key={`${idx}`}
            name={number.label}
            label={number.label}
            />)

          }
            
          )}
          </Stack>
        
        </CardContent>
          
        </Card>
      </Container>

    </>
  );
}
