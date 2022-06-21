import { useContext, useEffect } from "react";
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
    imageContainer2: {
        width: "40%",
    },
    Margin: {
        margin: "10px",
    },
};

function SuperResolution() {
    const {
        candidateImage,
        setCandidateImage,
        outputUrl,
        setOutputUrl,
        srUrl,
        setSRUrl,
    } = useContext(MainContext);
    const navigate = useNavigate();

    const handleFileChange = (image) => {
        console.log(image);
        setCandidateImage(image);
    };
    const clearImages = function () {
        setSRUrl("");
    };
    useEffect(() => {
        let getSR = async function () {
            const response = await axios.post(
                "http://localhost:3001/super-resolution",
                {
                    fileName: outputUrl.replace(
                        "http://localhost:3001/uploads/",
                        ""
                    ),
                }
            );
            console.log(response);
            setSRUrl(response.data.srUrl);
        };
        getSR();
    }, []);
    return (
        <Box sx={style.Home}>
            <Helmet>
                <title>Super Resolution</title>
            </Helmet>
            <Box sx={{ flexGrow: 0 }}>
                <Navbar />
            </Box>
            <Paper sx={style.HomePaper}>
                <Box sx={style.imagesContainer}>
                    <img
                        style={style.imageContainer}
                        src={outputUrl ? outputUrl : loading}
                        alt="input"
                    />
                    <DoubleArrowIcon sx={{ fontSize: "10em" }} />
                    <img
                        style={style.imageContainer2}
                        src={srUrl ? srUrl : loading}
                        alt="output"
                    />
                </Box>
                {srUrl && (
                    <Box style={style.Margin}>
                        <Button
                            variant="contained"
                            sx={{ mt: 5 }}
                            onClick={() => {
                                clearImages();
                                navigate("/upload");
                            }}
                            style={style.Margin}
                        >
                            essayer avec une autre image
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ mt: 5 }}
                            onClick={() => {
                                clearImages();
                                navigate("/history");
                            }}
                            style={style.Margin}
                        >
                            historique des images genere
                        </Button>
                    </Box>
                )}
            </Paper>
        </Box>
    );
}

export default SuperResolution;
