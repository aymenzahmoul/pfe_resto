import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import defaultLogo from '../../assets/images/logos/2525.jpg';
import {TextField } from '@mui/material';
function Profil() {
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
    <Container className={`restaurant ${theme}`}>
      <Row>
        <Col>
          <img src={logo} alt={name}   style={{
        width: 150,
        height: 150,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "right",
        alignItems: "right"}}  />
        </Col>
        <Col>
          <h1>{name}</h1>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="restaurantName">
          <Form.Label>Nom du restaurant:</Form.Label>
          <Form.Control type="text" value={name} onChange={handleNameChange} />
        </Form.Group>
        <Form.Group controlId="restaurantLogo">
          <Form.Label>Logo:</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleLogoChange}  />
        </Form.Group>
        <Form.Group controlId="restaurantTheme">
          <Form.Label>Thème:</Form.Label>
          <Form.Control as="select" value={theme} onChange={handleThemeChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </Form.Control>
        </Form.Group>
        <TextField label="Nouveau mot de passe" fullWidth margin="normal" type="password" />
<TextField
               label="Confirmer le mot de passe"
               fullWidth
               margin="normal"
               type="password"
             />

        <Button variant="primary" type="submit">Enregistrer les modifications</Button>
      </Form>
    </Container>
  );
}

export default Profil;