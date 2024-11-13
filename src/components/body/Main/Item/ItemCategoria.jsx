import { useState, useEffect } from "react";
// import { productosByCategoria } from "../../../Data/asyncMocks";



const ItemCategoria = ({categoria}) => {

 

console.log(categoria)






  return (
   <>

    <h1 style={{margin:"1rem"}}>Por Categoria</h1>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row">
            {categoria.map((item) => (
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
    </div>


   
  </>
  )
}

export default ItemCategoria