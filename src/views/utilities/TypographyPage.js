/* eslint-disable no-unused-vars */
import React from 'react';
import {  Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import axios from "axios";
import  { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

import DashboardCard from '../../components/shared/DashboardCard';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Form from 'react-bootstrap/Form';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


  export default function TypographyPage() {
    const [users, setUsers] = useState([]);

    const { id } = useParams();
  
    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:8080/authentication-management/user/all");
      setUsers(result.data);
    };
  
    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:8080/authentication-management/user/all/${id}`);
      loadUsers();
    };
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value);
    };
  return (<>


<Card sx={{ maxWidth: 345 }}>
    
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Filters
      </Typography>
      <Typography variant="body2" color="text.secondary">
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Search" variant="outlined" startIcon={< SearchIcon />}/>
      <Form.Select aria-label="Default select example" required >
      <option>Sexe</option>
      <option value="1">Homme</option>
      <option value="2">Femme</option>
      
    </Form.Select>
    <Form.Select aria-label="Default select example">
      <option>active</option>
      <option value="1">Yes</option>
      <option value="2">No</option>
      
    </Form.Select>
    </Box>
      
        
    
        
  
      
      </Typography>
    </CardContent>
    
     

    <CardActions>
      <Button size="small">filter</Button>
      
    </CardActions>
  </Card>
  <br></br>
    <DashboardCard title="Users">
      
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
                            ID
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Name
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            email
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            sexe
                        </Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography variant="subtitle2" fontWeight={600}>
                        active
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
                {users.map((product) => (
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
                                        {product.username}
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
                            <Chip
                                sx={{
                                    px: "4px",
                                    backgroundColor: product.pbg,
                                    color: "#fff",
                                }}
                                size="small"
                                label={product.priority}
                            ></Chip>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="h6">{product.enabled.toString()}</Typography>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Box>
  
   
</DashboardCard>

</>
  );
};



