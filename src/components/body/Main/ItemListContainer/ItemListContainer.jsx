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

  return (
    <>
   
    <Item productosEn={productosEn} productosPr={productosPr}/>
    </>
  )
}

 export default ItemListContainer