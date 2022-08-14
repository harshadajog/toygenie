import { Box, Card, Container, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { GET_TOYS_FOR_SALE } from '../../graphql/graphql';
import CustomCard from '../CustomCard/Customcard';
import { ToyStatusEnum } from '@toygenie/graphql-access';
import NestedModal from "../BasicModal/ToyModal";
import SingleToy from "./SingleToy";

export default function Toys () {
    const { loading, error: toysError, data: toysData } = useQuery(GET_TOYS_FOR_SALE, {
        variables:{
            saleStatus: ToyStatusEnum.Active
        }
    })
    
    if (loading) return <p>Loading...</p>;
    if (toysError) return <p>Error :(</p>;
    console.log("Calling Published Toys", toysData && toysData?.findAllByStatus);    

    if(toysData && toysData?.findAllByStatus.length == 0){
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
            <h2>Toys for Sale</h2>
            <hr />
            <Container component="main" maxWidth="md" sx={{ mb: 8 }}>
                <Grid container spacing={4} py={3}>
                    {toysData?.findAllByStatus.map((toy:any) => (
                    <Grid key={toy.id} item xs={12} sm={6} md={4}>
                    {/* <CustomCard toy={toy} ctaBuy={true} ctaSold={false}/> */}
                   {/* <NestedModal toy={toy}/> */}
                        <SingleToy toy={toy} />
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}