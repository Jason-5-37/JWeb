import React, { Component } from "react";
import 'animate.css';
import './header.css';
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <>
            <div id = "Pic"/>
            <div id = "NarBar">
                <NavLink id = "NarItem" className="animate__animated animate__fadeInTopLeft" exact to = "/">ABOUT</NavLink>
                <NavLink id = "NarItem" className="animate__animated animate__fadeInTopLeft" to = "/project">PROJECT</NavLink>
                <NavLink id = "NarItem" className="animate__animated animate__fadeInTopLeft">CONTACT</NavLink>
                <NavLink id = "NarItem" className="animate__animated animate__fadeInTopLeft">GITHUB</NavLink>
                <NavLink id = "NarItem" className="animate__animated animate__fadeInTopLeft">LINKEDIN</NavLink>
            </div>
            </>
            )
        }
}

export default Header;