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
import DashboardCard from '../../components/shared/DashboardCard';
import { IconBasket, IconSquarePlus } from '@tabler/icons';
import BlankCard from '../../components/shared/BlankCard';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
const products = [
    {
        id: "1",
        name: "Sunil Joshi",
        post: "Web Designer",
        pname: "Elite Admin",
        priority: "Low",
        pbg: "primary.main",
        budget: "3.9",
    },
    {
        id: "2",
        name: "Andrew McDownland",
        post: "Project Manager",
        pname: "Real Homes WP Theme",
        priority: "Medium",
        pbg: "secondary.main",
        budget: "24.5",
    },
    {
        id: "3",
        name: "Christopher Jamil",
        post: "Project Manager",
        pname: "MedicalPro WP Theme",
        priority: "High",
        pbg: "error.main",
        budget: "12.8",
    },
    {
        id: "4",
        name: "Nirav Joshi",
        post: "Frontend Engineer",
        pname: "Hosting Press HTML",
        priority: "Critical",
        pbg: "success.main",
        budget: "2.4",
    },
];

 
  export default function Stores() {
    const [restaurants, setRestaurants] = useState([]);

    const { id } = useParams();
  
    useEffect(() => {
        loadRestaurants();
    }, []);
  
    const loadRestaurants = async () => {
      const result = await axios.get("http://localhost:8080/restaurant-configuration/restaurants/all");
      setRestaurants(result.data);
    };
  
    const deleteRestaurants = async (id) => {
      await axios.delete(`http://localhost:8080/restaurant-configuration/restaurants/${id}`);
      loadRestaurants();
    };
  return (
    
    <DashboardCard title="Restaurant">
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
    <Button variant="outlined" href="AddProduct" startIcon={<IconSquarePlus />}>
        add Restaurant
      </Button>
      </Stack>
    <br></br>
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
                            Id
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Name
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Email
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            logo
                        </Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography variant="subtitle2" fontWeight={600}>
                            Address
                        </Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography variant="subtitle2" fontWeight={600}>
                            date
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {restaurants.map((product) => (
                    <TableRow key={product.name}>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                {product.id}
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
                                        {product.name}
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        sx={{
                                            fontSize: "13px",
                                        }}
                                    >
                                        {product.address}
                                    </Typography>
                                </Box>
                            </Box>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {product.log}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Chip
                                sx={{
                                    px: "4px",
                                    backgroundColor: product.pbg,
                                    color: "#fff",
                                }}
                                size="small"
                                label={product.log}
                            ></Chip>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="h6">{product.budget}</Typography>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Box>
</DashboardCard>
  );
};