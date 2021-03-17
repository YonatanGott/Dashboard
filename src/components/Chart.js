import React, { useEffect, useState } from "react";
import { Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ResponsiveLine } from "@nivo/line";

// Material UI component style
const useStyles = makeStyles(() => ({
    chartContainer: {
        height: "50vh",
        width: "100%",
        backgroundColor: "#eceff1",
    },
    chartTitle: {
        fontFamily: "Play",
        fontWeight: "700",
    },
}));

const Chart = ({ chart, title }) => {
    const classes = useStyles();
    const [showGraph, setShowGraph] = useState(false)

    // Show Graph
    useEffect(() => {
        if (chart.length > 0) {
            setShowGraph(true)
        } else {
            setShowGraph(false)
        }
    }, [chart])

    return (
        <>
            { showGraph &&
                <Container maxWidth="lg" className={classes.root}>
                    <Typography className={classes.chartTitle}
                        variant="h3"
                    >
                        {title}
                    </Typography>
                    <Paper className={classes.chartContainer} elevation={3}>
                        <ResponsiveLine
                            data={chart}
                            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                            xScale={{ type: "point" }}
                            yScale={{
                                type: "linear",
                                min: "auto",
                                max: "auto",
                                stacked: false,
                                reverse: false,
                            }}
                            yFormat=" >-.2f"
                            curve="monotoneX"
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                orient: "bottom",
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: "Matches",
                                legendOffset: 36,
                                legendPosition: "middle",
                            }}
                            axisLeft={{
                                orient: "left",
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: "Percentage",
                                legendOffset: -40,
                                legendPosition: "middle",
                            }}
                            enableSlices="x"
                            enableGridX={false}
                            enableGridY={false}
                            colors={{ scheme: "dark2" }}
                            pointSize={6}
                            pointColor={{ theme: "background" }}
                            pointBorderWidth={2}
                            pointBorderColor={{ from: "serieColor" }}
                            pointLabelYOffset={-12}
                            useMesh={true}
                            legends={[
                                {
                                    anchor: "top",
                                    direction: "row",
                                    justify: false,
                                    translateX: 0,
                                    translateY: -30,
                                    itemsSpacing: 10,
                                    itemDirection: "left-to-right",
                                    itemWidth: 80,
                                    itemHeight: 30,
                                    itemOpacity: 0.75,
                                    symbolSize: 12,
                                    symbolShape: "circle",
                                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                                    effects: [
                                        {
                                            on: "hover",
                                            style: {
                                                itemBackground: "rgba(0, 0, 0, .03)",
                                                itemOpacity: 1,
                                            },
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Paper>
                </Container>
            }
        </>
    );
};
export default Chart;
