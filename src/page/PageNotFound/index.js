import React, { Component } from "react";
import { Button } from 'antd';
import 'antd/dist/antd.css';
import "./PageNotFound.css";
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <>
            <div id = "PageNotFoundWrapper">
            <h1 id="PageNotFoundTitle">404 <br/> Something is not right...</h1>
            <h3 id="Para">
            You are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.    
            </h3> 
            
            <Button type="primary"><Link to={`/`}>Go back to home page</Link></Button>
            </div>
            </>
            
            )
        }
}

export default PageNotFound;