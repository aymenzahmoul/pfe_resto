import React from 'react';
import axios from "axios";
import  { useEffect,useState } from "react";
import {  useParams } from "react-router-dom";
import DashboardCard from 'src/components/shared/DashboardCard';
import Box from '@mui/material/Box';
import { Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import defaultLogo from '../../assets/images/logos/2525.jpg';

import { IconArrowLeft } from '@tabler/icons';

  export default function AddProduct() {
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
    const [name, setName] = useState("Nom du Restaurant");
  const [logo, setLogo] = useState(defaultLogo); 
  const [theme, setTheme] = useState("light");

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setLogo(reader.result);
    }
    reader.readAsDataURL(file);
  }

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // save changes to backend
  }
  return (
    <DashboardCard title="Produits / Create">
  <Button variant="outlined" href="produits" startIcon={<IconArrowLeft />}>
  <IconArrowLeft /> Create product
      </Button>
    <br></br>
    <Box>
    <Form noValidate onSubmit={handleSubmit}>
    <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label> </Form.Label>
          <Form.Control
            required
            type="file"
        
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      <Row className="mb-3">
        
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label> name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=" name"
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>prix</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="number"
              placeholder="prix"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
             
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>des</Form.Label>
          <Form.Control type="text" placeholder="des" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
   
      </Row>
      <Form.Group className="mb-3">
    
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
 
    </Box>

</DashboardCard>
  );
};