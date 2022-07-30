import { Box, Card, Container, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { usePublishedToysQuery } from "@toygenie/graphql-access";
import { useEffect } from "react";
import CustomCard from '../CustomCard/Customcard';


export default function Toys ({published}:{published:boolean}) {
    
    const { data: toysData, loading, error:toysError } = usePublishedToysQuery({
        variables: {
            published: true
        }
    });
    if (loading) return <p>Loading...</p>;
    if (toysError) return <p>Error :(</p>;
    console.log("Calling Published Toys", toysData && toysData?.publishedToys);    

    if(toysData && toysData?.publishedToys.length == 0){
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
            <Container component="main" maxWidth="lg" sx={{ mb: 8 }}>
                <Grid container spacing={4}>
            {toysData?.publishedToys.map((toy) => (
                <Grid key={toy.id} item xs={12} sm={6} md={4}>
                    <CustomCard toy={toy} />
                </Grid>  
            ))}
            </Grid>
            </Container>
            
                </>
        );

}