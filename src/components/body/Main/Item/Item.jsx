


export default function Item({titulo, description, botonlink}) {



    return (
        <>
            <div>
                <img src="src/assets/img/pan_dulce_duo-min.webp" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">{botonlink}</a>
                </div>
            </div>


        </>
    )
}