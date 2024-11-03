

function NavBar() {

    
    return (
        <nav className="navbar navbar-expand-sm  navbar-dark">
            
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="./img/icono_obrador.png" alt="icono sin fondo"/>El Obrador</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="collapsibleNavbar">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./pages/productos.html">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./pages/recetas.html">Recetas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./pages/login.html">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./pages/about.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./pages/carrito.html"><i className="fa-solid fa-cart-shopping"></i> <span className="badge bg-danger rounded-pill " id="carrito-box"></span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;