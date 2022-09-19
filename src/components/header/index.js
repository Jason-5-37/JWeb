import React, { Component } from "react";
import 'animate.css';
import './header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <>
            <div id = "Pic"/>
            <div id = "Bar">
                <div id="NavBar">
                    <NavLink to= "/" id = "NarItem" className="animate__animated animate__fadeInTopLeft">ABOUT</NavLink>
                    <NavLink to="/project" id = "NarItem" className="animate__animated animate__fadeInTopLeft">PROJECT</NavLink>
                    <div id = "NarItem" className="animate__animated animate__fadeInTopLeft">CONTACT</div>
                    <div id = "NarItem" className="animate__animated animate__fadeInTopLeft">GITHUB</div>
                    <div id = "NarItem" className="animate__animated animate__fadeInTopLeft">LINKEDIN</div>
                </div>
            </div>
            </>
            )
        }
}

export default Header;