import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
    render() {
        return (
            <div id="frame">
                <h1>Contact</h1>
                <h2>Email: zhanhonglu@foxmail.com</h2>
                <h2>phone: +64 0220326119</h2>
                <h2>
                    <a href="https://github.com/Jason-5-37" target="github">GITHUB</a> &nbsp;&nbsp;
                    <a href="https://www.linkedin.com/in/zhanhong-lu-a068b8227/" target="Linkedin">LINKEDIN</a>
                </h2>
                <div id= 'delete'></div>
            </div>
            )
        }
}

export default Contact;