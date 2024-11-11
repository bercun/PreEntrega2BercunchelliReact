
import "./body.css";
import Footer from "./Footer/Footer";
import NavBar from "./Header/NavBar/NavBar";
import ItemContainer from "./Main/ItemContainer/ItemContainer";
import About from "../pages/About";
import Login from "../pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetail from "./Main/Item/ItemDetail";
import ItemCategoria from "./Main/Item/ItemCategoria";


function Body() {
    return (
        <>
        <BrowserRouter>
        
            <NavBar />
            
            {/* <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/productos" element={<ItemContainer />} />
                <Route path="/login" element={<Login/>} />
            </Routes> */}

        <ItemCategoria categoria="entrantes" />
               

            
            <Footer />  
        
        </BrowserRouter>
        {/* <ItemDetail id={2}/> */}
        </>

    );
}

export default Body;


 {/* <Route path="/detalle:id" element=<ItemDetail id={2} /> /> */}