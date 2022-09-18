import React, { Component } from "react";
import './About.css';

class About extends Component {
    render() {
        return (
            <>
            <h1 id="Title">About</h1>

            <div id="ContentBox" data-aos="fade-right">
                <h2 id = "SubTitle">Profile</h2>
            </div>
            
            <div id="ContentBox" data-aos="fade-left">
                <h2 id = "SubTitle">Skill</h2>
            </div>

            <div id="ContentBox" data-aos="fade-right">
                <h2 id = "SubTitle">Project Experience</h2>
            </div>

            <div id="ContentBox" data-aos="fade-left">
                <h2 id = "SubTitle">Work Experience</h2>
            </div>

            <div id="ContentBox" data-aos="fade-right">
                <h2 id = "SubTitle">Interests</h2>
            </div>
            </>
            )
        }
}

export default About;