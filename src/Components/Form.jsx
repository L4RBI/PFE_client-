import { useState } from "react";

import { Box, Button, MenuItem, Select, InputLabel } from "@mui/material";

function Form({ onFileChange, selecetedValue, onSelectionChange }) {
    const [image, setImage] = useState(null);
    // const fileInput = useRef();

    // const handleChange = (evt) => {
    //     evt.preventDefault();
    //     const data = new FormData();
    //     const file = evt.target.files[0];
    //     data.append("image", evt.target.files[0]);
    //     console.log(data, file);

    //     const config = {
    //         headers: {
    //             "content-type": "multipart/form-data",
    //         },
    //     };

    //     const uploadData = async () => {
    //         const response = await axios.post(
    //             "http://localhost:3001/image-upload",
    //             data,
    //             config
    //         );
    //         console.log(response);
    //         setImage(response.data.url);
    //     };

    //     uploadData();
    // };
    return (
        <Box>
            <Button variant="contained" component="label">
                Upload File
                <input
                    type="file"
                    hidden
                    onChange={(e) => onFileChange(e.target.files[0])}
                />
            </Button>
            {/* <Select
                value={selecetedValue}
                sx={{ ml: 5 }}
                label="Model"
                onChange={(e) => onSelectionChange(e.target.value)}
            >
                <MenuItem value="ResGanV1">ResGan v1</MenuItem>
                <MenuItem value="ResGanV2">ResGan v2</MenuItem>
                <MenuItem value="ResGanV3">ResGan v3</MenuItem>
            </Select> */}
        </Box>
    );
}

export default Form;
