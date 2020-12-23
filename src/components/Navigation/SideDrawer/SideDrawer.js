import React from 'react';
// import Logo from '../../Logo/Logo';
import "./SideDrawer.css"
import "../NavigationItems/NavigationItems.css"
import "../NavigationItems/NavigationItem/SideNavigationItem"
import SideNavigationItem from '../NavigationItems/NavigationItem/SideNavigationItem';

const sideDrawer = ( props ) => {
    // let drawerClasses = "sideDrawer";
    // if (props.open) {
    //     drawerClasses = ["sideDrawer Open"];
    // }
    return (
        <>
            {/* <Backdrop show={props.open} clicked={props.closed}/> */}
            <div className={props.open ? "SideDrawer Open" : "SideDrawer Close" }>
                <nav>
                    <div className="times-bt-container">
                        <button className="times-bt" onClick={props.closed}>&times;</button>
                    </div>    
                    <SideNavigationItem onClick={props.closed}/>
                </nav>
            </div>
        </>
    );
};

export default sideDrawer;