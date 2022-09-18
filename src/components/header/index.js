import React, { Component } from "react";
import 'animate.css';
import './header.css';

class Header extends Component {
    render() {
        return (
            <>
            <div id = "Pic"/>
            <div id = "NarBar">
                <div id = "NarItem" className="animate__animated animate__fadeInTopLeft">About</div>
                <div id = "NarItem" className="animate__animated animate__fadeInTopLeft">PROJECT</div>
                <div id = "NarItem" className="animate__animated animate__fadeInTopLeft">CONTACT</div>
                <div id = "NarItem" className="animate__animated animate__fadeInTopLeft">GITHUB</div>
                <div id = "NarItem" className="animate__animated animate__fadeInTopLeft">LINKEDIN</div>
            </div>
            </>
            )
        }
}

export default Header;