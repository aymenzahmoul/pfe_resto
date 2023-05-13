import React from 'react';


import axios from "axios";
import  { useEffect,useState } from "react";
import { Grid, Paper, InputBase, IconButton,  TextField, Avatar } from '@mui/material';
import { Stack } from '@mui/system';
import {IconSquarePlus } from '@tabler/icons';

import {
    MDBContainer,
   
  } from "mdb-react-ui-kit";
  import SearchIcon from '@mui/icons-material/Search';
  import Button from '@mui/material/Button';
  import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaselinr from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import { Container } from 'react-bootstrap';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DashboardCard from 'src/components/shared/DashboardCard';

import { useNavigate } from 'react-router';
import Meal from '../products/Meal';
  export default function Produits() {

    let navigate = useNavigate()
    const [category, setCategory] = useState([]);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      image: image,
      restaurantId: 1,
    };
    axios.post('http://localhost:8080/category-configuration/category/create', data)
    navigate("/");
  };

    useEffect(() => {
      axios.get('http://localhost:8080/category-configuration/category/all')
        .then(response => {
          setCategory(response.data);
          
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  const [meal, setMeat] = useState({
    nameMeal: "",
    desc: "",
    price: "",
    categoryId:"",
  });
  const[photo,setPhoto]=useState('')
  const { nameMeal, desc, price,categoryId } = meal;

  const onInputChange = (e) => {
    setMeat({ ...meal, [e.target.name]: e.target.value });
  };
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    const dataa = {
      name_Meal:nameMeal,
      desc: desc,
      price:price,
      photo:photo,
      categoryId:categoryId,
    };
    await axios.post(`http://localhost:8080/meal-configuration/meal/create`, dataa)
    navigate("/");
  };


    const [state, setState] = React.useState({
      right: false,
    });
  
    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === 'keydown' && ((event  ).key === 'Tab' || (event ).key === 'Shift')) {
        return;
      }
  
      setState({ ...state, right: open });
    };
  
    const list = (
      <Box
        sx={{ width: 450 }}
        role="presentation"
      
       
      >
        <List>
          <form  >
        <Container component="main" maxWidth="xs">
        <CssBaselinr />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
         <Button component="label">
           <Avatar   size="100" src="/broken-image.jpg" />
          <input type="file" hidden  onChange={handlePhotoChange}/>
        </Button>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  name="nameMeal"
                  required
                  fullWidth
                  id="nameMeal"
                  label="nameMeal"
                  value={nameMeal}
                  onChange={onInputChange}
                  
                />
              </Grid>
              
           <Grid item xs={12} row={2}>
                <TextField
                  required
                  fullWidth
                  id="desc"
                  multiline
                  rows={4}
                  label="desc"
                  name="desc"
                  autoComplete="desc"
                  value={desc}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="price"
                  label="price"
                  type="number"
                  id="price"
                  value={price}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl sx={{  minWidth: 120 }}>
               <InputLabel id="demo-simple-select-helper-label">category</InputLabel>
               <Select value={categoryId} labelId="demo-simple-select-helper-label" name='categoryId' onChange={onInputChange} id="demo-simple-select-helper" label="category">
                    {category.map((product,s) => (
                    
                    <MenuItem value={s++} >{product.name}</MenuItem>
                  
                    ))}

                </Select>
                
                </FormControl>
              </Grid>
             
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}  onClick={onSubmit}   >
              save
            </Button>
           
          </Box>
        </Box>
       
      </Container> 
      </form>
        </List>
      </Box>
    );
    const [statee, setStatee] = React.useState({
      right: false,
    });
  
    const toggleDrawerr = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === 'keydown' && ((event  ).key === 'Tab' || (event ).key === 'Shift')) {
        return;
      }
  
      setStatee({ ...statee, right: open });
    };

    const listcat = (
      <Box
        sx={{ width: 450 }}
        role="presentation"
      
       
      >
        <List>
         
          <Container component="main" maxWidth="xs">
        <CssBaselinr />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
         <Button component="label">
           <Avatar   size="100" src="/broken-image.jpg"  />
          <input type="file" hidden  onChange={handleImageChange}/>
        </Button>
        <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  value={name}
                  onChange={handleNameChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 3 }}
             onClick={handleSubmit}
            >
              save
            </Button>
           
          </Box>
        </Box>
       
      </Container> 
     
        </List>
      </Box>
    );
  
  return (
    <DashboardCard title="Products">
    <MDBContainer fluid className="my-5 text-center">
  
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
   
      <div>
      <Button variant="outlined"  startIcon={<IconSquarePlus />} onClick={toggleDrawer(true)}> ADD Product</Button>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer(false)}
      >
        {list}
      </Drawer>
    </div>
    <div>
      <Button variant="outlined"  startIcon={<IconSquarePlus />} onClick={toggleDrawerr(true)}> ADD category</Button>
      <Drawer
        anchor={'right'}
        open={statee['right']}
        onClose={toggleDrawerr(false)}
      >
        {listcat}
      </Drawer>
    </div>
      </Stack>
    <br></br>
   <Meal/>
  
  </MDBContainer>
  </DashboardCard>
  );
};