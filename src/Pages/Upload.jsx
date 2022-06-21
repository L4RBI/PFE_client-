import { useEffect, useContext, useState } from "react";
import { MainContext } from "../context/Main";
import axios from "axios";
import { Helmet } from "react-helmet";

import { Box, Button, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Form from "../Components/Form";
const imageMimeType = /image\/(png|jpg|jpeg)/i;

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
    imageBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: "70%",
        margin: "10px",
    },
};

function Upload() {
    const {
        selectedValue,
        setSelectedvalue,
        candidateImage,
        setCandidateImage,
        inputUrl,
        setInputUrl,
        outputUrl,
        setOutputUrl,
        processTry,
        setProcessTry,
    } = useContext(MainContext);

    const [file, setFile] = useState(null);

    const [fileDataURL, setFileDataURL] = useState(null);

    const navigate = useNavigate();

    const handleFileChange = (e) => {
        console.log(e);
        const file = e;
        if (!file.type.match(imageMimeType)) {
            alert("le type de l'image n'est pas valide");
            return;
        }
        setFile(file);
        console.log(file);
        setCandidateImage(file);
    };
    useEffect(() => {
        let fileReader,
            isCancel = false;
        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result && !isCancel) {
                    setFileDataURL(result);
                }
            };
            fileReader.readAsDataURL(file);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        };
    }, [file]);

    const handleSelectChange = (model) => {
        console.log(model);
        setSelectedvalue(model);
    };

    const handleProcessImage = () => {
        if (!candidateImage) return;
        setInputUrl("");
        setOutputUrl("");
        const data = new FormData();
        data.append("image", candidateImage);
        data.append("model", selectedValue);
        console.log(data, candidateImage);

        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        };

        const uploadData = async () => {
            const response = await axios.post(
                "http://localhost:3001/image-upload",
                data,
                config
            );
            console.log(response);
            setInputUrl(response.data.inputUrl);
            setOutputUrl(response.data.outputUrl);
        };

        uploadData();
        navigate("/showcase-output");
    };

    function createRemark() {
        if (!candidateImage) {
            return { __html: "veuillez uploader une image pour continuer" };
        }
        return { __html: "" };
    }

    return (
        <Box sx={style.Home}>
            <Helmet>
                <title>Uploader une image</title>
            </Helmet>
            <Box sx={{ flexGrow: 0 }}>
                <Navbar />
            </Box>
            <Paper sx={style.HomePaper}>
                <Form
                    onFileChange={handleFileChange}
                    selecetedValue={selectedValue}
                    onSelectionChange={handleSelectChange}
                />
                {fileDataURL ? (
                    <Box style={style.imageBox} sx={{ mt: 5 }}>
                        {
                            <img
                                src={fileDataURL}
                                style={style.imageContainer}
                                alt="preview"
                            />
                        }
                    </Box>
                ) : null}
                <Button sx={{ mt: 5 }} onClick={handleProcessImage}>
                    Process
                </Button>
                <Typography
                    variant="subtitle1"
                    dangerouslySetInnerHTML={createRemark()}
                ></Typography>
            </Paper>
        </Box>
    );
}

export default Upload;
