import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="../assets/logo.svg"></img></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <button className="btn btn-outline-danger" type="submit">Salir</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;