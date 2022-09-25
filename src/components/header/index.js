import React, { Component } from "react";
import 'animate.css';
import './header.css';
import { NavLink } from 'react-router-dom';
import menupic from '../../img/menu.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn:true,
            display:'none'
        };
        
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <>
            <div id = "Pic"/>
                <div id = "Bar">
                    <div id="NavBar">
                        <img id="menuicon" src={menupic} alt="NotFound" onClick={this.handleClick}/>
                        <NavLink to= "/" id = "NarItem" className="animate__animated animate__fadeInTopLeft">ABOUT ME</NavLink>
                        <NavLink to="/project" id = "NarItem" className="animate__animated animate__fadeInTopLeft">PROJECT</NavLink>
                        <NavLink to="/contact" id = "NarItem" className="animate__animated animate__fadeInTopLeft">CONTACT</NavLink>
                        <a id = "NarItem" className="animate__animated animate__fadeInTopLeft"
                        href="https://github.com/Jason-5-37" target="github">GITHUB</a>
                        <a id = "NarItem" className="animate__animated animate__fadeInTopLeft"
                        href="https://www.linkedin.com/in/zhanhong-lu-a068b8227/" target="Linkedin">LINKEDIN</a>
                    </div>

                    <NavLink to= "/" id="mobileNavItem" style={{display:this.state.display}}>ABOUT ME</NavLink>
                    <NavLink to="/project" id="mobileNavItem" style={{display:this.state.display}}>PROJECT</NavLink>
                    <NavLink to="/contact" id="mobileNavItem" style={{display:this.state.display}}>CONTACT</NavLink>
                    <a id="mobileNavItem" href="https://github.com/Jason-5-37" target="github" style={{display:this.state.display}}>GITHUB</a>
                    <a id="mobileNavItem" href="https://www.linkedin.com/in/zhanhong-lu-a068b8227/" target="Linkedin" style={{display:this.state.display}}>LINKEDIN</a>
                </div>
            </>
            )
        }

        handleClick() {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn,
                display:prevState.isToggleOn ? 'none':'table'
            }));
        }
}

export default Header;