

function Item({ productos, }) {
    return (
        <>
            <div className="container">
                <h2 className="p-4" >Nuestros productos</h2>
                <div className="row">
                    {productos.map((producto) => (
                        <div key={producto.id} className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card h-100">
                                <img src={producto.img} alt="imagen" className="card-img-top img-fluid" style={{ width: '10rem', height: 'auto' }} />
                                <div className="card-body">
                                    <h3 className="card-title">{producto.nombre}</h3>
                                    <p className="card-text">{producto.descripcion}</p>
                                    <p className="card-text">{producto.precio}</p>
                                    <button className="btn btn-primary">Comprar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            <hr />
            {/* <div className="container">
                <h2>Principales</h2>
                <div className="row">
                    {productosPr.map((producto) => (
                        <div key={producto.id} className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="card h-100">
                                <img src={producto.img} alt="imagen" className="card-img-top img-fluid" style={{ width: '10rem', height: 'auto' }} />
                                <div className="card-body">
                                    <h3 className="card-title">{producto.nombre}</h3>
                                    <p className="card-text">{producto.descripcion}</p>
                                    <p className="card-text">{producto.precio}</p>
                                    <button className="btn btn-primary">Comprar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </>
    );
}

export default Item;
