import { Box, Button, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Helmet } from 'react-helmet';

import { useNavigate } from "react-router-dom";
import USTHB from "../USTHB.webp"

const style = {
    Home: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    HomePaper: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // borderRadius: "30px",
    },
    imageContainer: {
        width: "20%",
    },
    Margin: {
        margin: "10px"
    },
    text : {
        textAlign : "center"
    }
};

function Home() {
    const navigate = useNavigate();
    return (
        <Box sx={style.Home}>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Paper sx={style.HomePaper}>
            <img src= {USTHB} alt="logo" style={style.imageContainer}/>

                <Typography variant="h4">
                     bienvenue sur l'interface de notre projet
                </Typography>
                <Typography variant="h3" style={style.text}>
                        Développement d’une Approche basée sur les Réseaux antagonistes génératifs pour la génération d’Images Thermiques.
                    </Typography>
                    <Typography variant="subtitle1" >
                            USTHB 2021/2022
                    </Typography>
                    <Typography component={"p"}>
                         Ce projet a été réalisé par <b>AISSI Mohamed Salim</b> et <b>HARKAT Adel Larbi</b>, sous la direction de <b>Prof. BAHA Nadia</b> et <b>Dr. MEBTOUCHE Naoual</b>
                    </Typography>
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{ mt: 5 }}
                    onClick={() => navigate("/upload")}
                >
                    Start
                </Button>
                <Box style = {style.Margin}>
                {/* <Button
                    variant="contained"
                    sx={{ mt: 5 }}
                    onClick={() => navigate("/quantitative-results")}
                    style = {style.Margin}
                >
                    check our quantitative results
                </Button>
                <Button
                    variant="contained"
                    sx={{ mt: 5 }}
                    onClick={() => navigate("/qualitative-results")}
                    style = {style.Margin}
                    
                >
                    check our qualitative results
                </Button> */}
                </Box>
                
            </Paper>
        </Box>
    );
}

export default Home;
