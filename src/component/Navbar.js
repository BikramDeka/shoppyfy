import React from "react";
import {Link} from "react-router-dom";
import logo from "../logo/shoppi.png";


export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <Link to="/" className="navbar-brand"><img className="nav_logo" src={logo} alt="Shoppi"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mt-2">
                    <Link to="/" className="nav-item nav-link active"><i className="fas fa-th"></i> Products<span className="sr-only">(current)</span></Link>
                    <Link to="/cart" className="nav-item nav-link" href="#"><i className="fas fa-shopping-cart"></i> Cart</Link>
                    </div>
                </div>
            </nav>
        )
    }
}