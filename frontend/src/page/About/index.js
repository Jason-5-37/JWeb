import React, { Component } from "react";
import 'animate.css';
import './About.css';

class About extends Component {
    render() {
        return (
            <>
            <h1 id="Title" class="animate__animated animate__rubberBand">About</h1>
            <div id="ContentBox">
                <h2 id = "SubTitle">Profile</h2>
                <p>I am a 2022 AUT graduate with a major in software development and I would like to 
                gain a career as a developer. In my last year of university, I took part in the Blendz 
                project and developed an e-commerce website for Blendz company as a Scrum Master 
                and developer. From this project, I started to learn about what developers do. Building 
                up the web application makes me feel satisfied and a sense of accomplishment.
                </p>
                <h2 id = "SubTitle">Skill</h2>
                <h2 id = "SubTitle">Project Experience</h2>
                <h2 id = "SubTitle">Work Experience</h2>
                <h2 id = "SubTitle">Interests</h2>
            </div>
            </>
            )
        }
}

export default About;