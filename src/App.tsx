import { Route, Routes } from "react-router-dom";
import NavBar from "./Componets/NavBar";

export default function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    );
}
