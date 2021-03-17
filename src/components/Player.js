import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Paper,
    Avatar,
    Typography,
    LinearProgress,
} from "@material-ui/core";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import ShowChartIcon from '@material-ui/icons/ShowChart';

// Material UI component style
const useStyles = makeStyles((theme) => ({
    playerCard: {
        marginTop: theme.spacing(2),
        backgroundColor: "#eceff1",
    },
    playerAvatar: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    playerScreenName: {
        fontFamily: "Bangers",
    },
    playerStats: {
        width: "90%",
    },
    playerStatsCard: {
    },
    playerProgress: {
        height: theme.spacing(1.5),
    },
    graphIcon: {
        marginLeft: "0.5rem",
    },
    graphIconActive: {
        marginLeft: "0.5rem",
        borderRadius: "0.4rem",
        backgroundColor: "indigo",
        color: "white",
    }
}));

const average = (array) => array.reduce((a, b) => a + b, 0) / array.length;

const Player = ({ player, setChartData, removeGraph, title }) => {
    const [showDMGraph, setShowDMGraph] = useState(true);
    const [showAntGraph, setShowAntGraph] = useState(true);
    const [showVAGraph, setShowVAGraph] = useState(true);
    const [showCCGraph, setShowCCGraph] = useState(true);
    const [showSGraph, setShowSGraph] = useState(true);
    const [showPGraph, setShowPGraph] = useState(true);
    const classes = useStyles();

    // Averages 
    const decisionMakingAvg = Math.round(average(player.decisionMaking));
    const anticipationAvg = Math.round(average(player.anticipation));
    const visualAwarenessAvg = Math.round(average(player.visualAwareness));
    const SpeedAvg = Math.round(average(player.Speed));
    const cornerClearingAvg = Math.round(average(player.cornerClearing));
    const precisionAvg = Math.round(average(player.precision));

    // Clear Buttons on Chart Change 
    useEffect(() => {
        switch (title) {
            case 'Decision Making':
                setShowAntGraph(true)
                setShowVAGraph(true)
                setShowCCGraph(true)
                setShowSGraph(true)
                setShowPGraph(true)
                break;
            case 'Anticipation':
                setShowDMGraph(true)
                setShowVAGraph(true)
                setShowCCGraph(true)
                setShowSGraph(true)
                setShowPGraph(true)
                break;
            case 'Visual Awareness':
                setShowDMGraph(true)
                setShowAntGraph(true)
                setShowCCGraph(true)
                setShowSGraph(true)
                setShowPGraph(true)
                break;
            case 'Corner Clearing':
                setShowDMGraph(true)
                setShowAntGraph(true)
                setShowVAGraph(true)
                setShowSGraph(true)
                setShowPGraph(true)
                break;
            case 'Speed':
                setShowDMGraph(true)
                setShowAntGraph(true)
                setShowVAGraph(true)
                setShowCCGraph(true)
                setShowPGraph(true)
                break;
            case 'Precision':
                setShowDMGraph(true)
                setShowAntGraph(true)
                setShowVAGraph(true)
                setShowCCGraph(true)
                setShowSGraph(true)
                break;
            default:
                setShowDMGraph(true)
                setShowAntGraph(true)
                setShowVAGraph(true)
                setShowCCGraph(true)
                setShowSGraph(true)
                setShowPGraph(true)
        }
    }, [title])

    // Decision Making
    const handleDecisionMaking = () => {
        let chartType = 'Decision Making';
        setChartData(player.decisionMaking, player.screenName, chartType);
        setShowDMGraph(false)
    }
    const handleCancelDecisionMaking = () => {
        removeGraph(player.screenName)
        setShowDMGraph(true)
    }

    // Anticipation
    const handleAnticipation = () => {
        let chartType = 'Anticipation';
        setChartData(player.anticipation, player.screenName, chartType);
        setShowAntGraph(false)
    }
    const handleCancelAnticipation = () => {
        removeGraph(player.screenName)
        setShowAntGraph(true)
    }

    // Visual Awareness
    const handleVisualAwareness = () => {
        let chartType = 'Visual Awareness';
        setChartData(player.visualAwareness, player.screenName, chartType);
        setShowVAGraph(false)
    }
    const handleCancelVisualAwareness = () => {
        removeGraph(player.screenName)
        setShowVAGraph(true)
    }

    // Speed
    const handleSpeed = () => {
        let chartType = 'Speed';
        setChartData(player.Speed, player.screenName, chartType);
        setShowSGraph(false)
    }
    const handleCancelSpeed = () => {
        removeGraph(player.screenName)
        setShowSGraph(true)
    }

    // Corner Clearing
    const handleCornerClearing = () => {
        let chartType = 'Corner Clearing';
        setChartData(player.cornerClearing, player.screenName, chartType);
        setShowCCGraph(false)
    }
    const handleCancelCornerClearing = () => {
        removeGraph(player.screenName)
        setShowCCGraph(true)
    }

    // Precision
    const handlePrecision = () => {
        let chartType = 'Precision';
        setChartData(player.precision, player.screenName, chartType);
        setShowPGraph(false)
    }
    const handleCancelPrecision = () => {
        removeGraph(player.screenName)
        setShowPGraph(true)
    }

    return (
        <Grid item xs>
            <Paper elevation={3} className={classes.playerCard}>
                <Grid
                    container
                    direction="column"
                    justify="space-evenly"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid item>
                                <Avatar className={classes.playerAvatar}>
                                    <VideogameAssetIcon />
                                </Avatar>
                            </Grid>
                            <Grid item>
                                <Typography
                                    className={classes.playerName}
                                    variant="h5"
                                >
                                    {player.name}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.playerScreenName} variant="h6">
                            {player.screenName}
                        </Typography>
                    </Grid>
                    <Grid item className={classes.playerStats}>
                        <Typography variant="button"  >
                            <span className="skill-title">
                                Decision Making:
                                </span>
                            <span className="skill-score">
                                {decisionMakingAvg}%
                                </span>
                            {showDMGraph ? <ShowChartIcon onClick={handleDecisionMaking} className={classes.graphIcon} /> : <ShowChartIcon onClick={handleCancelDecisionMaking} className={classes.graphIconActive} />}
                        </Typography>
                        <LinearProgress
                            className={classes.playerProgress}
                            variant="determinate"
                            value={decisionMakingAvg}
                        />

                    </Grid>
                    <Grid item className={classes.playerStats}>
                        <Typography variant="button"  >
                            <span className="skill-title">
                                Anticipation:
                                </span>
                            <span className="skill-score">
                                {anticipationAvg}%
                            </span>
                            {showAntGraph ? <ShowChartIcon onClick={handleAnticipation} className={classes.graphIcon} /> : <ShowChartIcon onClick={handleCancelAnticipation} className={classes.graphIconActive} />}
                        </Typography>
                        <LinearProgress
                            className={classes.playerProgress}
                            variant="determinate"
                            value={anticipationAvg}
                        />
                    </Grid>
                    <Grid item className={classes.playerStats}>
                        <Typography variant="button"  >
                            <span className="skill-title">
                                Visual Awareness:
                                </span>
                            <span className="skill-score">
                                {visualAwarenessAvg}%
                                </span>
                            {showVAGraph ? <ShowChartIcon onClick={handleVisualAwareness} className={classes.graphIcon} /> : <ShowChartIcon onClick={handleCancelVisualAwareness} className={classes.graphIconActive} />}
                        </Typography>
                        <LinearProgress
                            className={classes.playerProgress}
                            variant="determinate"
                            value={visualAwarenessAvg}
                        />
                    </Grid>
                    <Grid item className={classes.playerStats}>
                        <Typography variant="button"  >
                            <span className="skill-title">
                                Speed:
                                </span>
                            <span className="skill-score">
                                {SpeedAvg}%
                                </span>
                            {showSGraph ? <ShowChartIcon onClick={handleSpeed} className={classes.graphIcon} /> : <ShowChartIcon onClick={handleCancelSpeed} className={classes.graphIconActive} />}
                        </Typography>
                        <LinearProgress
                            className={classes.playerProgress}
                            variant="determinate"
                            value={SpeedAvg}
                        />
                    </Grid>
                    <Grid item className={classes.playerStats}>
                        <Typography variant="button"  >
                            <span className="skill-title">
                                Corner Clearing:
                                </span>
                            <span className="skill-score">
                                {cornerClearingAvg}%
                                </span>
                            {showCCGraph ? <ShowChartIcon onClick={handleCornerClearing} className={classes.graphIcon} /> : <ShowChartIcon onClick={handleCancelCornerClearing} className={classes.graphIconActive} />}
                        </Typography>
                        <LinearProgress
                            className={classes.playerProgress}
                            variant="determinate"
                            value={cornerClearingAvg}
                        />
                    </Grid>
                    <Grid item className={classes.playerStats}>
                        <Typography variant="button"  >
                            <span className="skill-title">
                                Precision:
                                </span>
                            <span className="skill-score">
                                {precisionAvg}%
                                </span>
                            {showPGraph ? <ShowChartIcon onClick={handlePrecision} className={classes.graphIcon} /> : <ShowChartIcon onClick={handleCancelPrecision} className={classes.graphIconActive} />}
                        </Typography>
                        <LinearProgress
                            className={classes.playerProgress}
                            variant="determinate"
                            value={precisionAvg}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};
export default Player;
