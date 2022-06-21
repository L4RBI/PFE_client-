

import { Box, Button, Paper, Typography } from "@mui/material";


import Navbar from "../Components/Navbar";
import illustration1 from '../illustration1.png';
import gen from '../images/gen/I00397.jpg';
import rgb from '../images/rgb/I00397.jpg';
import tir from '../images/tir/I00397.jpg';


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
        width: "80%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "10px"
    },
    imageContainer: {
        width: "30%",
    },
};

function addImage(name) {
    return { rgb : "./src/illustration1.png" , tir : "../images/tir/" + name, gen : "../images/gen/" + name };
  }
const files = [
    addImage("I00397.jpg"),
    addImage("I00409.jpg"),
    addImage("I00577.jpg")
]
console.log(files)

function Qualitative() {
    return (
        <Box sx={style.Home}>
            <Box sx={{ flexGrow: 0 }}>
                <Navbar />
            </Box>
            <Paper sx={style.HomePaper}>
                <Typography variant="h3" >
                    These are the generated Images outputed by our model
                </Typography>
                <iframe id="player" type="text/html" width="640" height="390"
                src="http://www.youtube.com/embed/EasBLiGaOCk"
                frameborder="0"></iframe>
                {/* {files.map((file) => (
                        <Box sx={style.imagesContainer}>
                            <img
                                style={style.imageContainer}
                                src={require(file.rgb).default}
                                alt="input"
                            />
                            <img
                                style={style.imageContainer}
                                src={require(file.tir).default}
                                alt="input"
                            />
                            <img
                                style={style.imageContainer}
                                src={require(file.gen).default}
                                alt="input"
                            />
                        </Box>
                    ))} */}
                
                <Box sx={style.imagesContainer}>
                    
                        <Box sx={style.imagesContainer}>
                            <img
                                style={style.imageContainer}
                                src={rgb}
                                alt="input"
                            />
                            <img
                                style={style.imageContainer}
                                src={tir}
                                alt="input"
                            />
                            <img
                                style={style.imageContainer}
                                src={gen}
                                alt="input"
                            />
                        </Box>
                        <Box sx={style.imagesContainer}>
                            <img
                                style={style.imageContainer}
                                src={rgb}
                                alt="input"
                            />
                            <img
                                style={style.imageContainer}
                                src={tir}
                                alt="input"
                            />
                            <img
                                style={style.imageContainer}
                                src={gen}
                                alt="input"
                            />
                        </Box>    
                </Box>
                <Box sx={style.imagesContainer}>
                    
                        <Box sx={style.imagesContainer}>
                            <img
                                style={style.imageContainer}
                                src={rgb}
                                alt="input"
                            />
                            <img
                                style={style.imageContainer}
                                src={tir}
                                alt="input"
                            />
                            <img
                                style={style.imageContainer}
                                src={gen}
                                alt="input"
                            />
                        </Box>
                        <Box sx={style.imagesContainer}>
                            <img
                                style={style.imageContainer}
                                src={rgb}
                                alt="input"
                            />
                            <img
                                style={style.imageContainer}
                                src={tir}
                                alt="input"
                            />
                            <img
                                style={style.imageContainer}
                                src={gen}
                                alt="input"
                            />
                        </Box>    
                </Box>
                <Box sx={style.imagesContainer}>
                    
                        <Box sx={style.imagesContainer}>
                            <img
                                style={style.imageContainer}
                                src={rgb}
                                alt="input"
                            />
                            <img
                                style={style.imageContainer}
                                src={tir}
                                alt="input"
                            />
                            <img
                                style={style.imageContainer}
                                src={gen}
                                alt="input"
                            />
                        </Box>
                        <Box sx={style.imagesContainer}>
                            <img
                                style={style.imageContainer}
                                src={rgb}
                                alt="input"
                            />
                            <img
                                style={style.imageContainer}
                                src={tir}
                                alt="input"
                            />
                            <img
                                style={style.imageContainer}
                                src={gen}
                                alt="input"
                            />
                        </Box>    
                </Box>
                
            </Paper>
        </Box>
    );
}

export default Qualitative;
