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

import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import {  MDBTable } from 'mdb-react-ui-kit';
import { IconPencil } from '@tabler/icons';
 
 function Category() {
    const [cat, setCat] = useState([]);
  const [meat, setMeat] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadCat();
    loadMeat();
  }, [id]);

  const loadMeat = async () => {
    const result = await axios.get(`http://localhost:8080/meal-configuration/byCategory/${id}`);
    setMeat(result.data);
  };

  const loadCat = async () => {
    const result = await axios.get("http://localhost:8080/category-configuration/category/all");
    setCat(result.data);
  };

  const deleteCommande = async (id) => {
    await axios.delete(`http://localhost:8080/category-configuration/category/delete/${id}`);
    loadCat();
  };
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            
          
        },
      
      
       
    ];
  return (<>

  
    <DashboardCard title="Categories">
    <Box sx={{ overflow: 'auto', width: { xs: 'auto', sm: 'auto' } }}>
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
                        <Typography variant="subtitle2" fontWeight={400}>
                            Active
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={400}>
                            Actions
                        </Typography>
                    </TableCell>
                   
                </TableRow>
            </TableHead>
            <TableBody>
                {cat.map((product) => (
                    <TableRow key={product.name}>
                        <TableCell>
                        <MDBAccordion initialActive={items.length}>
                        <MDBAccordionItem collapseId={items.length} headerTitle= {product.name}>
      <MDBTable align='middle'>
   
      
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
                                    Assigned
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Priority
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Budget
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {meat.map((product) => (
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
                                                {product.desc}
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

    </MDBTable>
      </MDBAccordionItem>
     
    </MDBAccordion>
     
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
                            <Typography >
                            <IconPencil/>
                            </Typography>
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
export default Category ;