import React, { Component } from "react";
import "./Project.css";
import PicCarousel from "../../components/AntDesign/BlendzCarousel";

class Project extends Component {
    render() {
        return (
            <div id="frame">
                <h1 id="Title">Project</h1>
                <h2>Blendz</h2>
                <p>
                    Built an e-commerce website with a modern layout and payment function to replace
                    the current website of Blendz slush machines company.<br/>
                    Role: Scrum Master<br/>
                    Technologies: React.js, Express.js, Firebase, Heroku, Figma<br/>
                    <li>
                        Collaborated with the team to evaluate the problem of the current website and 
                        create reliable project proposal
                    </li>
                    <li>Researched the similar website and create UI design for the new website
                    </li>
                    <li>Improved operational efficiency by developing the online shopping and payment 
                        function for the new website
                    </li>
                    <li>Created the friendly product management system for the administrator
                    </li>
                </p>
                <a href="https://www.figma.com/file/fhISbXA1Dk6qZoehMUhDI9/Blendz?node-id=0%3A1" target="blank" id="Link">UI Design for Blendz website</a>
                <br/>
                <a href="https://blendz.herokuapp.com/" target="blank2" id="Link">Final product (Prototype)</a>
                <br/>
                <br/>

                <PicCarousel></PicCarousel>

            </div>
            )
        }
}

export default Project;