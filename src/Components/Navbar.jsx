import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
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
        width: "75px",
        margin: "5px"
    },
    Margin: {
        margin: "10px",
    }
};

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx = {{display: "flex", justifyContent : "space-between" }}>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Box sx = {{display: "flex", alignItems: "center"}}>
                        <img src= {USTHB} alt="logo" style={style.imageContainer}/>
                        <Button color="inherit" sx={style.margin} onClick={() => navigate("/")}>
                            Génération d'images thermiques 
                        </Button>
                    </Box>
                 
                    {/* <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        onClick={() => navigate("/upload")}
                    >
                        try with an image
                    </Typography> */}
                    <Button color="inherit"  onClick={() => navigate("/history")}>Historique</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
