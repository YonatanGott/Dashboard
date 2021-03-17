import React from 'react';
import { Grid, Container } from "@material-ui/core";
import Player from './Player';



const Team = ({ players, setChartData, removeGraph, title }) => {


    return (
        <Container maxWidth="lg" className="team-container">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                {players.map(player => {
                    return <Player key={player._id} player={player} setChartData={setChartData} removeGraph={removeGraph} title={title} />
                })}
            </Grid>
        </Container>
    )
}
export default Team;