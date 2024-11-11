
import "./body.css";
import Footer from "./Footer/Footer";
import NavBar from "./Header/NavBar/NavBar";
import ItemContainer from "./Main/ItemContainer/ItemContainer";
import About from "../pages/About";
import Login from "../pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";


function Body() {
    return (
        <>
        <BrowserRouter>
        
            <NavBar />
            
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/productos" element={<ItemContainer />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/detalle:id" element={<Item  />} />
            </Routes>

            
            <Footer />  
        
        </BrowserRouter>
        </>

    );
}

export default Body;