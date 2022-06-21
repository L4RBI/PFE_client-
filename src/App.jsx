import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Upload from "./Pages/Upload";
import ShowCase from "./Pages/ShowCase";
import SuperResolution from "./Pages/SuperResolution";
import History from "./Pages/History";
import AboutProject from "./Pages/AboutProject";
import Quantitative from "./Pages/Quantitative";
import Qualitative from "./Pages/Qualitative";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/showcase-output" element={<ShowCase />} />
            <Route path="/super-resolution" element={<SuperResolution />} />
            <Route path="/history" element={<History />} />
            {/* < Route path = "/about-the-project" element = { < AboutProject / > }/>  
        < Route path = "/qualitative-results" element = { < Qualitative / > }/> 
        < Route path = "/quantitative-results" element = { < Quantitative / > }/>  */}
        </Routes>
    );
}

export default App;
