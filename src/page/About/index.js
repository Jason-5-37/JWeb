import React, { Component } from "react";
import './About.css';

class About extends Component {
    render() {
        return (
            <div id="frame">
                <h1 id="Title">About Me</h1>

                <div id="ContentBox" className="leftBox" data-aos="fade-right">
                    <h2 id = "SubTitle" className="LeftSubTitle">Profile</h2>
                    <p id = "content">
                        I am a 2022 AUT graduate with a major in software development and I would like to 
                        gain a career as a web developer. In my last year of university, I took part in the 
                        Blendz project and developed an e-commerce website for Blendz company as a 
                        Scrum Master and developer. From this project, I started to learn about what web 
                        developers do. Building up the web application makes me feel satisfied and a sense of 
                        accomplishment.
                    </p>
                </div>
                
                <div id="ContentBox" className="rightBox" data-aos="fade-left">
                    <h2 id = "SubTitle" className="RightSubTitle">Skill</h2>
                    <p id = "content">
                        <li>Full stack development</li>
                        <li>Project management</li>
                        <li>UI design</li>
                        <li>Self-learning</li><br/>
                        Technical Skills:<br/>
                        JavaScript, HTML, CSS, PHP, C++, Java, SQL, Firebase, MongoDB, React.js, 
                        Express.js, Scrum, Heroku, Git, Web development, Project management<br/><br/>
                        
                        Languages:<br/>
                        English, Cantonese, Mandarin
                    </p>
                </div>

                <div id="ContentBox" className="leftBox" data-aos="fade-right">
                    <h2 id = "SubTitle" className="LeftSubTitle">Project Experience</h2>
                    <p id = "content">
                    Blendz (Commercial development)<br/>
                    SPEED (School project)
                    </p>

                </div>

                <div id="ContentBox" className="rightBox" data-aos="fade-left">
                    <h2 id = "SubTitle" className="RightSubTitle">Work Experience</h2>
                    <p id = "content">
                        Super Liquor Onehunga<br/>
                        Role: Salesperson (Part-time)<br/>
                        Date: Mar 2019 – Dec 2019<br/><br/>
                        <li>Provided excellent customer services</li>
                        <li>Developed sales skills and demonstrated good communication</li>
                        <li>Time management skills developed by studying while working</li>
                    
                    </p>

                </div>

                <div id="ContentBox" className="leftBox" data-aos="fade-right">
                    <h2 id = "SubTitle" className="LeftSubTitle">Interests</h2>
                    <p id = "content">
                        <li>Camping</li>
                        <li>Reading</li>
                    </p>
                </div>
            </div>
            )
        }
}

export default About;