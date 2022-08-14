import { Container, Divider, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_TOYS_BY_AUTHOR } from '../graphql/graphql';
import CustomCard from '../components/CustomCard/Customcard';
import { Toy, ToyStatusEnum } from "@toygenie/graphql-access";


export default function ToysByAuthor () {
    let val = window.localStorage.getItem("USER")!;
    const [user, setUser] = useState(JSON.parse(val));
    const [error, setError] = useState('');
    let sellingByAuthor: Toy[] = [], soldByAuthor: Toy[] = [];
    const { loading, error: toysError, data: toysData } = useQuery(GET_TOYS_BY_AUTHOR, {
        variables:{
            author: user.id
        }
    })

    if(toysError){
        setError(toysError.message);
    }
    else if(toysData){
        sellingByAuthor = toysData?.findAllByAuthor.filter((toy: Toy) => {
            return toy.saleStatus === ToyStatusEnum.Active;
        })
        soldByAuthor = toysData?.findAllByAuthor.filter((toy: Toy) => {
            return toy.saleStatus == ToyStatusEnum.Sold;
        })

        console.log(" Toys on Sale: ", sellingByAuthor);
        console.log(" Toys Sold by user: ", soldByAuthor);
    }

    if(toysData && toysData?.findAllByAuthor.length == 0){
        return ( <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center">
                No inventory!
            </Typography>
        </Paper>
      </Container>)
    }    
    return (
        <>
        <Toolbar />
        <Typography component="h2" variant="h4" align="center">
            Selling
        </Typography>
        <Divider variant="middle" />
        <Container component="main" maxWidth="md" sx={{ mb: 8 }}>
            <Grid container spacing={4}>
            {sellingByAuthor.map((toy:any) => (
                <Grid key={toy.id} item xs={12} sm={6} md={4}>
                    <CustomCard toy={toy} ctaBuy={false} ctaSold={true} />
                </Grid>  
            ))}
            </Grid>
        </Container>

        <Typography component="h1" variant="h4" align="center">
            Sold
        </Typography>
        <Divider variant="middle" />
        <Container component="main" maxWidth="md" sx={{ mb: 8 }}>
                <Grid container spacing={4}>
            {soldByAuthor.map((toy:any) => (
                <Grid key={toy.id} item xs={12} sm={6} md={4}>
                    <CustomCard toy={toy} ctaBuy={false} ctaSold={false}/>
                </Grid>  
            ))}
            </Grid>
            </Container>
        </>
        );

}