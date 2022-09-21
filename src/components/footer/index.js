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