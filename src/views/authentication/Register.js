import React, { useState } from 'react';
import { Grid, Box, Card, Typography, Stack, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/full/shared/logo/Logo';

const Register2 = () => {
const [accountType, setAccountType] = useState('client');

const handleAccountTypeChange = (type) => {
setAccountType(type);
};

const renderFormFields = () => {
if (accountType === 'client') {
return (
<div>
<TextField label="Nom" fullWidth margin="normal" />
<TextField label="Prénom" fullWidth margin="normal" />
<TextField label="Email" fullWidth margin="normal" />
<TextField label="Mot de passe" fullWidth margin="normal" type="password" />
<TextField
               label="Confirmer le mot de passe"
               fullWidth
               margin="normal"
               type="password"
             />
</div>
);
} else if (accountType === 'restaurant') {
return (
  <div>
  <TextField label="Nom de restaurant" fullWidth margin="normal" />
  <TextField label="Nom et Prenom de G " fullWidth margin="normal" />
  <TextField label="Num de telephone " fullWidth margin="normal"   />
  <TextField label="Adresse" fullWidth margin="normal" /> </div>
);
}
};

return (
<PageContainer title="Register" description="this is Register page">
<Box
sx={{
position: 'relative',
'&:before': {
content: '""',
background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
backgroundSize: '400% 400%',
animation: 'gradient 15s ease infinite',
position: 'absolute',
height: '100%',
width: '100%',
opacity: '0.3',
},
}}
>
<Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
<Grid
         item
         xs={12}
         sm={12}
         lg={4}
         xl={3}
         display="flex"
         justifyContent="center"
         alignItems="center"
       >
<Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
<Box display="flex" alignItems="center" justifyContent="center">
<Logo />
</Box>
<Box sx={{ mb: 2 }}>
<Typography variant="subtitle1" textAlign="center" color="textSecondary" mb={1}>
Choisissez votre type de compte :
</Typography>
<Stack direction="row" justifyContent="center" spacing={2}>
<Button
variant={accountType === 'client' ? 'contained' : 'outlined'}
onClick={() => handleAccountTypeChange('client')}
>
Client
</Button>
<Button
variant={accountType === 'restaurant' ? 'contained' : 'outlined'}
onClick={() => handleAccountTypeChange('restaurant')}
>
Restaurant/Pizzeria
</Button>
</Stack>
</Box>
<div>
{renderFormFields()}


<Box sx={{ mt: 3 }}>
<Button variant="contained" fullWidth size="large">
S'inscrire
</Button>
</Box>
<Box sx={{ mt: 2 }}>

                  <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                    <Typography color="textSecondary" variant="h6" fontWeight="500">
                      deja cree un compte? 
                    </Typography>
                    <Typography
                      component={Link}
                      to="/auth/login "
                      fontWeight="500"
                      sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                      }}
                    >
                      Connecter
                    </Typography>
                  </Stack>
                

</Box>
</div>
</Card>
</Grid>
</Grid>
</Box>
</PageContainer>
);
};
export default Register2;