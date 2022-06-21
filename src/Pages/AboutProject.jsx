import { useContext } from "react";
import { MainContext } from "../context/Main";
import axios from "axios";

import { Box, Button, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Form from "../Components/Form";

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
        justifyContent: "space-around",
        alignItems: "center",
        textAlign:"center"
    },
    imageContainer: {
        width: "20%",
    },
};

function AboutProject() {

    return (
        <Box sx={style.Home}>
            <Box sx={{ flexGrow: 0 }}>
                <Navbar />
            </Box>
            <Paper sx={style.HomePaper}>
                    
                <Box sx={style.imagesContainer}>
                    <Typography variant="h3" >
                            The Use of Deep Learning for data augmentation on thermal images
                    </Typography>
                    <Typography variant="subtitle1" >
                            USTHB 2021/2022
                    </Typography>
                    <Typography component={"p"}>
                            Data is one of the key elements in Deep Learning, often times, a large enough dataset enables the training of highly effective models, whilist a small one, can cause models to overfit rendering them un-effective. 
                            as the tiles suggests it, in this work we will focus on augmenting thermal data using Deep learning based methods, namely Generative Adversial Nets.<br />
                            Our method generates the thermal representation of a pedestrian scene from it's RBG image, in the context of data augmentation.
                            our algorithms were trained on the Kaist dataset. <br />
                            Our approach is based on the PixToPix model, our contribution can be seen in the theses aviable here. <br />
                            this projects was realised by Harkat Adel Larbi and Aissi Mohamed Salim under the tutolage of Dr. Mebtouch Nawel and Prof. Baha Nadia.
                    </Typography>
                
                </Box>

            </Paper>
        </Box>
    );
}

export default AboutProject;