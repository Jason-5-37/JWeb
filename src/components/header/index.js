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
                <div id = "NarItem" className="animate__animated animate__fadeInTopLeft" exact to = "/"><NavLink>ABOUT</NavLink></div>
                <div id = "NarItem" className="animate__animated animate__fadeInTopLeft" to = "/project"><NavLink>PROJECT</NavLink></div>
                <div id = "NarItem" className="animate__animated animate__fadeInTopLeft"><NavLink>CONTACT</NavLink></div>
                <div id = "NarItem" className="animate__animated animate__fadeInTopLeft"><NavLink>GITHUB</NavLink></div>
                <div id = "NarItem" className="animate__animated animate__fadeInTopLeft"><NavLink>LINKEDIN</NavLink></div>
            </div>
            </>
            )
        }
}

export default Header;