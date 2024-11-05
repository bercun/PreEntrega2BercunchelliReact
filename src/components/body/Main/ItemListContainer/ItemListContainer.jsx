import { useEffect, useState } from "react"
import Item from "../Item/Item"
import {productosEnLoad, productosPrLoad} from "../../../../Data/asyncMocks"




function ItemListContainer() {

 const [productosEn, setproductosEn]= useState([])
 const [productosPr, setproductosPr]= useState([])

  useEffect(() => {   
    productosEnLoad().then((data) => {
      setproductosEn(data);
    });
    productosPrLoad().then((data) => {
      setproductosPr(data);
    });
  }, []);


console.log(productosEn);

  return (
    <>
    <div className="container">
      <h2>Entrantes</h2>
      {productosEn.map((producto) => {
        return (
          <div key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p>{producto.precio}</p>
            <button>comprar</button>
          </div>
        );

      }, )}
      </div>
      <div className="container"> 
      <h2>Principales</h2>
      {productosPr.map((producto) => {
        return (
          <div key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p>{producto.precio}</p>
            <button>comprar</button>
          </div>
        );

      }, )}
      </div>
    <Item/>
    </>
  )
}

 export default ItemListContainer