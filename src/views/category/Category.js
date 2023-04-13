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
import SpeedDial from '@mui/material/SpeedDial';


 
  export default function Category() {
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

    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            
          
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
          
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
           
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/';
            }
        }
    ];
  return (<>

  
    <DashboardCard title="Categories">
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
                            Title
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Active
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Actions
                        </Typography>
                    </TableCell>
                   
                </TableRow>
            </TableHead>
            <TableBody>
                {commandes.map((product) => (
                    <TableRow key={product.name}>
                        <TableCell>
                        
     
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