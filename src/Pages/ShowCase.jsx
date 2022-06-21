import { useContext } from "react";
import { MainContext } from "../context/Main";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Box, Button, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Form from "../Components/Form";
import loading from "../loading.svg";

const style = {
    Home: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    HomePaper: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0",
    },
    imagesContainer: {
        width: "75%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    imageContainer: {
        width: "30%",
    },
    boxMargin: {
        margin: "10px 0",
        display: "flex",
        justifyContent: "center",
    },
    btnMargin: {
        margin: "0 10px",
    },
};

function ShowCase() {
    const {
        selectedValue,
        setSelectedvalue,
        candidateImage,
        setCandidateImage,
        inputUrl,
        setInputUrl,
        outputUrl,
        setOutputUrl,
        setSRUrl,
    } = useContext(MainContext);
    const navigate = useNavigate();

    const handleFileChange = (image) => {
        console.log(image);
        setCandidateImage(image);
    };

    return (
        <Box sx={style.Home}>
            <Helmet>
                <title>Exhibition</title>
            </Helmet>
            <Box sx={{ flexGrow: 0 }}>
                <Navbar />
            </Box>
            <Paper sx={style.HomePaper}>
                <Box sx={style.imagesContainer}>
                    <img
                        style={style.imageContainer}
                        src={inputUrl ? inputUrl : loading}
                        alt="input"
                    />
                    <DoubleArrowIcon sx={{ fontSize: "10em" }} />
                    <img
                        style={style.imageContainer}
                        src={outputUrl ? outputUrl : loading}
                        alt="output"
                    />
                </Box>
                {outputUrl && (
                    <Box sx={{ flexGrow: 0 }}>
                        <Box sx={style.boxMargin}>
                            <Button
                                variant="contained"
                                onClick={() => navigate("/upload")}
                                sx={style.btnMargin}
                            >
                                essayer avec une autre image
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    setSRUrl("");
                                    navigate("/super-resolution");
                                }}
                                sx={style.btnMargin}
                            >
                                appliquer la super resolution
                            </Button>
                        </Box>
                        <Box sx={style.boxMargin}>
                            <Button
                                variant="contained"
                                onClick={() => navigate("/history")}
                                sx={style.btnMargin}
                            >
                                historique des images genere
                            </Button>
                        </Box>
                    </Box>
                )}
            </Paper>
        </Box>
    );
}

export default ShowCase;
