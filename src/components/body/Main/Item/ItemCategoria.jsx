import { useState, useEffect } from "react";
import { productosByCategoria } from "../../../../Data/asyncMocks";



const ItemCategoria = ({categoria}) => {

 const [byCategoria, setByCategoria]= useState([]);
    
      useEffect(() => {
      productosByCategoria(categoria).then((data) => { 
        setByCategoria(data);
      }); 
    }
    , []);








  return (
   <>

    {/* <h1 style={{margin:"1rem"}}>Categorias</h1> */}
    <div className="container"></div>
      <div className="row">
        <div className="col-12">
          <div className="row">
            {byCategoria.map((item) => (
              <div className="col-4" key={item.id}>
                <div className="card" style={{width: "18rem"}}>
                  <img src={item.img} className="card-img-top" alt={item.nombre} />
                  <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.descripcion}</p>
                    <p className="card-text">${item.precio}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


   
  </>
  )
}

export default ItemCategoria