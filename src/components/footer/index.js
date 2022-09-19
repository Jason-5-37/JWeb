import React, { Component } from "react";
import './footer.css';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <>
            <div id="bar"/>
            <div id="FooterWrapper">
                <div id="FooterBar">
                    <NavLink id="NarItem" to= "/">ABOUT</NavLink>
                    <NavLink id="NarItem" to="/project">PROJECT</NavLink>
                    <div id="NarItem">CONTACT</div>
                    <div id="NarItem">GITHUB</div>
                    <div id="NarItem">LINKEDIN</div>
                </div>
            </div>
            </>
            )
        }
}

export default Footer;