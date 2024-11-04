


function Item() {

    return (
        <>
            <h2 className="text-center mb-4 mt-4">Productos</h2>
            
            <div className="row row-cols-1 row-cols-sm-2 g-3 ">
                <div div className="col container p-5">
                    <div className="card">
                        <img src="./public/img/tarta_costado-min.webp" className="card-img-top" alt="card-grid-image" />
                        <div className="card-body ">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div div className="col container p-5">
                    <div className="card">
                        <img src="./public/img/pasta_rellena-min.webp" className="card-img-top" alt="card-grid-image" />
                        <div className="card-body ">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
          
            </div>


        </>
    )
}



export default Item




