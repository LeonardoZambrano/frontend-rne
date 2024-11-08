import React from "react";

// Componente Navbar
function Navbar() {
    return (
        <div className="container-fluid fondo-menu">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark navbar-color-gris">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/inicio">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/acerca">Acerca de</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/noticias">Noticias CRC</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contacto">Mecanismo de contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/consultar">Consultar Persona Jurídica</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;