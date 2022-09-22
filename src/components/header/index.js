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
                    <NavLink to="/contact" id = "NarItem" className="animate__animated animate__fadeInTopLeft">CONTACT</NavLink>
                    <a id = "NarItem" className="animate__animated animate__fadeInTopLeft"
                    href="https://github.com/Jason-5-37" target="github">GITHUB</a>
                    <a id = "NarItem" className="animate__animated animate__fadeInTopLeft"
                    href="https://www.linkedin.com/in/zhanhong-lu-a068b8227/" target="Linkedin">LINKEDIN</a>
                </div>
            </div>
            </>
            )
        }
}

export default Header;