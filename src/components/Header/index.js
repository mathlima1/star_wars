import React from "react";
import "./style.css"
import logo from "../../img/Logo.svg"

const Header = ()=>{
    return(
        <header className="header">
            <nav className="navbar">
                <div className="navbar__logoWrap">
                    <img src={logo} alt="Logo" className="navbar__logo"/>
                </div>
                <div className="navbar__listWrap">
                    <ul className="navbar__list">
                        <li className="navbar__items">Home</li>
                        <li className="navbar__items">Filmes</li>
                        <li className="navbar__items">Personagens</li>
                        <li className="navbar__items">Planetas</li>
                        <li className="navbar__items">Naves</li>
                        <li className="navbar__items">Espécies</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
export default Header;