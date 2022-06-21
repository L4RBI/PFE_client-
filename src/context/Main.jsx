import { useContext, createContext, useState } from "react";

const MainContext = createContext();

function MainContextProvider({ children }) {
    const [selectedValue, setSelectedvalue] = useState("ResGanV1");
    const [candidateImage, setCandidateImage] = useState(null);
    const [inputUrl, setInputUrl] = useState("");
    const [outputUrl, setOutputUrl] = useState("");
    const [srUrl, setSRUrl] = useState("");
    return (
        <MainContext.Provider
            value={{
                selectedValue,
                setSelectedvalue,
                candidateImage,
                setCandidateImage,
                outputUrl,
                setOutputUrl,
                inputUrl,
                setInputUrl,
                srUrl,
                setSRUrl,
            }}
        >
            {children}
        </MainContext.Provider>
    );
}

export { MainContext, MainContextProvider };
