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
    Chip,   
} from '@mui/material';
import DashboardCard from '../../components/shared/DashboardCard';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';


 
  export default function Orders() {
    const [commandes, setCommandes] = useState([]);

    const { id } = useParams();
  
    useEffect(() => {
      loadCommandes();
    }, []);
  
    const loadCommandes = async () => {
      const result = await axios.get("http://localhost:8080/commande");
      setCommandes(result.data);
    };
  
    const deleteCommande = async (id) => {
      await axios.delete(`http://localhost:8080/commande/${id}`);
      loadCommandes();
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
      <TextField id="outlined-basic" label="Search" variant="outlined"/>
      <Form.Select aria-label="Default select example" required >
      <option>status</option>
  
      
    </Form.Select>
      <Form.Select aria-label="Default select example" required >
      <option>stores</option>
     
      
    </Form.Select>
    <Form.Select aria-label="Default select example">
      <option>users</option>
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
    <DashboardCard title="Orders">
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
                            Order num
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            status
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            user
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            store
                        </Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography variant="subtitle2" fontWeight={600}>
                        prix
                        </Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography variant="subtitle2" fontWeight={600}>
                            Produits
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
                {commandes.map((product) => (
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
                                        {product.post}
                                    </Typography>
                                </Box>
                            </Box>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {product.pname}
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
                            <Typography variant="h6">${product.budget}k</Typography>
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