import { useEffect, useState } from "react"
import Item from "../Item/Item"
import {productosEnLoad,} from "../../../../Data/asyncMocks"




function ItemListContainer() {

 const [productos, setproductos]= useState([])
 
  useEffect(() => {   
    productosEnLoad().then((data) => {
      setproductos(data);
    });
  
  }
  , []);

  return (
    <>
   
    <Item productos={productos} />
    </>
  )
}

 export default ItemListContainer