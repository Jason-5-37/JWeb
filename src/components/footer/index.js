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
                    <NavLink id="NarItem" to= "/">ABOUT ME</NavLink>
                    <NavLink id="NarItem" to="/project">PROJECT</NavLink>
                    <NavLink id="NarItem" to="/contact">CONTACT</NavLink>
                    <a id="NarItem" href="https://github.com/Jason-5-37" target="github">GITHUB</a>
                    <a id="NarItem" href="https://www.linkedin.com/in/zhanhong-lu-a068b8227/" target="Linkedin">LINKEDIN</a>
                </div>
                <div id="iconBar">
                    Produce by Zhanhong 
                    <img src="https://firebasestorage.googleapis.com/v0/b/zhanhonglu-fb98f.appspot.com/o/favicon-32x32.png?alt=media&token=310fee37-dcd0-49fa-b73d-0957a7eb6ac0"
                    alt="Icon Not Found" width="20" id="footericon"/>
                </div>
            </div>
            </>
            )
        }
}

export default Footer;