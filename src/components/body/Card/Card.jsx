import Item from "../Item/Item";


 const Card = () => {
    
    
    return (
        <>
            <div className="card"  style={{ width: "15rem", margin: '1rem' }}>
                <Item titulo="Papas fritas" 
                      description="Some quick example text to build on the card title and make up the bulk of the card's content."
                      botonlink="btn-action"/>
            </div>
            <div className="card"  style={{ width: "15rem", margin: '1rem' }}>
            <Item titulo="ensalada" 
                      description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      botonlink="222action"/>      
            </div>
        </>
    )
}


export default Card;
             