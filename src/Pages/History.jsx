import { useEffect, useState, useContext } from "react";
import { MainContext } from "../context/Main";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { Box, Button, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Helmet } from "react-helmet";

import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Form from "../Components/Form";
import USTHB from "../USTHB.webp";

const style = {
    Home: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    HomePaper: {
        flexGrow: 1,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0",
    },
    imagesContainer: {
        // width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 50px",
        padding: "25px",
    },
    imageContainer: {
        width: "80%",
        margin: "0 10px",
    },
};

function History() {
    const [historia, setHistoria] = useState([]);
    const { inputUrl, setInputUrl, outputUrl, setOutputUrl } =
        useContext(MainContext);
    const navigate = useNavigate();

    useEffect(() => {
        let getHistoria = async function () {
            const response = await axios.get("http://localhost:3001/history");
            setHistoria([...response.data]);
        };
        getHistoria();
    }, []);
    let showcaseHandler = function (input, output) {
        setInputUrl(input);
        setOutputUrl(output);
        navigate("/showcase-output");
    };
    return (
        <Box sx={style.Home}>
            <Helmet>
                <title>Historique</title>
            </Helmet>
            <Box sx={{ flexGrow: 0 }}>
                <Navbar />
            </Box>
            <Paper sx={style.HomePaper}>
                {!historia.length && (
                    <Typography variant="h5">L'historique est vide</Typography>
                )}
                {historia.map(({ inputUrl, outputUrl }) => (
                    <Button
                        sx={style.imagesContainer}
                        key={uuid()}
                        onClick={() => showcaseHandler(inputUrl, outputUrl)}
                    >
                        <img
                            style={style.imageContainer}
                            src={inputUrl}
                            alt="input"
                        />
                        <img
                            style={style.imageContainer}
                            src={outputUrl}
                            alt="output"
                        />
                    </Button>
                ))}
            </Paper>
        </Box>
    );
}

export default History;
