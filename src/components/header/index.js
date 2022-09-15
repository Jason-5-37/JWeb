import React, { Component } from "react";
import { Pic, NarBar, NarItem } from './style';

class Header extends Component {
    render() {
        return (
            <>
            <Pic/>
            <NarBar>
                <NarItem>ABOUT</NarItem >
                <NarItem>PROJECT</NarItem >
                <NarItem>CONTACT</NarItem >
                <NarItem>GITHUB</NarItem >
                <NarItem>LINKEDIN</NarItem >
            </NarBar>
            </>
            )
        }
}

export default Header;