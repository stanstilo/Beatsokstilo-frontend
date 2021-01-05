import React from 'react';
import { StyledDrawer } from "./DrawerToggle.style"

const drawerToggle = (props) => (
    <StyledDrawer> 
        <div className = "DrawerToggle" onClick={props.clicked}>
        <div className="menu-button" id="menu-button1"></div>
        <div className="menu-button" id="menu-button2"></div>
        <div className="menu-button" id="menu-button3"></div>
        </div>
    </StyledDrawer>
);

export default drawerToggle;