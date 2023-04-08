import React from 'react';


import axios from "axios";
import  { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";


import { CardContent, Typography, Grid, Rating, Tooltip, Fab } from '@mui/material';
import img1 from 'src/assets/images/products/s4.jpg';
import img2 from 'src/assets/images/products/s5.jpg';
import img3 from 'src/assets/images/products/s7.jpg';
import img4 from 'src/assets/images/products/s11.jpg';
import { Stack } from '@mui/system';
import { IconBasket, IconSquarePlus } from '@tabler/icons';
import BlankCard from '../../components/shared/BlankCard';
import DashboardCard from '../../components/shared/DashboardCard';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';

import Button from '@mui/material/Button';
const ecoCard = [
    {
        title: 'Boat Headphone',
        subheader: 'September 14, 2023',
        photo: img1,
        salesPrice: 375,
        price: 285,
        rating: 4,
    },
    {
        title: 'MacBook Air Pro',
        subheader: 'September 14, 2023',
        photo: img2,
        salesPrice: 650,
        price: 900,
        rating: 5,
    },
    {
        title: 'Red Valvet Dress',
        subheader: 'September 14, 2023',
        photo: img3,
        salesPrice: 150,
        price: 200,
        rating: 3,
    },
    {
        title: 'Cute Soft Teddybear',
        subheader: 'September 14, 2023',
        photo: img4,
        salesPrice: 285,
        price: 345,
        rating: 2,
    },
];

  export default function Produits() {
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
   
  return (
    <DashboardCard title="Produits">
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
        add product
      </Button>
      </Stack>
    <br></br>
    <Grid container spacing={3}>
    {ecoCard.map((product, index) => (
        <Grid item sm={12} md={4} lg={3} key={index}>
            <BlankCard>
                <Typography component={Link}  to="/">
                    <div className="form-group">
                    <img src={product.photo} alt="img"  width="100%" />
                    </div>
                </Typography>
                <Tooltip title="Add To Cart">
                    <Fab
                        size="small"
                        color="primary"
                        sx={{ bottom: '75px', right: '15px', position: 'absolute' }}
                    >
                        <IconBasket size="16" />
                    </Fab>
                </Tooltip>
                <CardContent sx={{ p: 3, pt: 2 }}>
                    <Typography variant="h6">{product.title}</Typography>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
                        <Stack direction="row" alignItems="center">
                            <Typography variant="h6">${product.price}</Typography>
                            <Typography color="textSecondary" ml={1} sx={{ textDecoration: 'line-through' }}>
                                ${product.salesPrice}
                            </Typography>
                        </Stack>
                        <Rating name="read-only" size="small" value={product.rating} readOnly />
                    </Stack>
                </CardContent>
            </BlankCard>
        </Grid>
    ))}
</Grid>
</DashboardCard>
  );
};