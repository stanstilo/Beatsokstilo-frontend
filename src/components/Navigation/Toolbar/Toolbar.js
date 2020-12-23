import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import "./Toolbar.css";

const toolbar = ( props ) => (
    <header className="Toolbar">  
       <DrawerToggle clicked={props.drawerToggleClicked} />
        <nav className="DesktopOnly">
            <NavigationItems clicked={props.drawerToggleClicked} />
        </nav>
    </header>
);

export default toolbar;