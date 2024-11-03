import { productosEnLoad, productosPrLoad } from "../../asyncMocks";
import { ItemCount } from "../../header/carrito/carrito";

import { useState, useEffect } from "react";



function ItemListContainer() {

    // se importan los productos de la base de datos asyncMocks.js
    const [productosEnItem, setProductosEnLoad] = useState([]);
    useEffect(() => {
        productosEnLoad().then((res) => {
            setProductosEnLoad(res);
        });
    }, []);

    // se importan los productos de la base de datos asyncMocks.js
    const [productosPrItem, setProductosPrLoad] = useState([]);
    useEffect(() => {
        productosPrLoad().then((res) => {
            setProductosPrLoad(res);
        });
    }, []);
    


    return (
        <>
            <h2 className="text-center mb-4 mt-4">Productos</h2>
            <div className="container">
                <div className="conteiner-fluid">
                    <div className="row">
                        <div className="prod-left col-sm-6 col-lg-3 col-xl-2"></div>
                            <div className="prod-right col-sm-6 col-lg-3 col-xl-2 ">
                                <h3 key={productosEnItem.id}>{productosEnItem.nombre}</h3>
                                <p key={productosEnItem.id}>{productosEnItem.descripcion}</p>
                            </div>
                        
                    </div>
                </div>
            </div>

        </>


    );
}

export default ItemListContainer

