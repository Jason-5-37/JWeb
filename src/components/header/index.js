import React, { Component } from "react";
import 'animate.css';
import './header.css';
import { NavLink } from 'react-router-dom';
import menupic from '../../img/menu.png';

class Header extends Component {
    render() {
        return (
            <>
            <div id = "Pic"/>
            <div id = "Bar">
                <div id="NavBar">
                    <img id="menuicon" src={menupic} alt="NotFound" onClick={openNavBar}/>
                    <NavLink to= "/" id = "NarItem" className="animate__animated animate__fadeInTopLeft">ABOUT ME</NavLink>
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
    
function openNavBar(){
    return(
        <div id="menu">return this </div>
    )
}

export default Header;