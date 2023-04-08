import React from 'react';

import axios from "axios";
import  { useEffect,useState } from "react";
import {  useParams } from "react-router-dom";
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';

import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';

import Button from '@mui/material/Button';

import DashboardCard from '../../components/shared/DashboardCard';
import { Stack } from '@mui/system';
import {  IconSquarePlus } from '@tabler/icons';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
  export default function Couriers() {
    const [couriers, setCouriers] = useState([]);

    const { id } = useParams();
  
    useEffect(() => {
      loadCouriers();
    }, []);
  
    const loadCouriers = async () => {
      const result = await axios.get("http://localhost:8080/courier");
      setCouriers(result.data);
    };
  
    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadCouriers();
    };
  return (
    <DashboardCard title="Couriers">
         <Stack direction="row"  spacing={13}> 
         <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
    
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
   
    
    </Paper>
    <Button variant="outlined" href="addCouriers" startIcon={<IconSquarePlus />}>
        add Couriers
      </Button>
      </Stack>
    <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
        <Table
            aria-label="simple table"
            sx={{
                whiteSpace: "nowrap",
                mt: 2
            }}
        >
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                        Name
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Phone
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Email
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Address
                        </Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography variant="subtitle2" fontWeight={600}>
                            Action
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {couriers.map((product) => (
                    <TableRow key={product.name}>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                {product.name}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Box>
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        {product.phone}
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        sx={{
                                            fontSize: "13px",
                                        }}
                                    >
                                        {product.post}
                                    </Typography>
                                </Box>
                            </Box>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {product.email}
                            </Typography>
                        </TableCell>
                        <TableCell>
                           
                               
                        <Typography variant="h6">{product.address}</Typography>
                            
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="h6"></Typography>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Box>
</DashboardCard>
  );
};