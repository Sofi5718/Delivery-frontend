import { Route, Routes } from "react-router-dom";
import NavBar from "./componets/NavBar";
import ProductList from "./componets/ProductList";

export default function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={"hello"} />
                <Route path="products" element={<ProductList/>} />
            </Routes>
        </div>
    );
}
