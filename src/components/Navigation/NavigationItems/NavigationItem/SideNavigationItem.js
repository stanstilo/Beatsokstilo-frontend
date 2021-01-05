import React from 'react'
import NavigationImg from './NavigationImg'
// import '../NavigationItems.css'
import { withRouter } from "react-router-dom"

 const sideNavigationItems = ({history, onClick}) => {
    return (
    <>
    <nav className = "Navbar-Bg">
       <ul className = "NavigationItems">  
         <NavigationImg className="NavigationImg" link="/">YalebsTech</NavigationImg>       
          <div className='right-nav-items'>
             <li className = "NavigationItem" onClick={()=>{onClick();history.push('/')}}>Home</li>
             <li className = "NavigationItem" onClick={()=>{onClick();history.push("/services")}}>Services</li>
             <li className = "NavigationItem" onClick={()=>{onClick();history.push("/about")}}>About</li>
             <li className = "NavigationItem" onClick={()=>{onClick();history.push("/contact")}}>Contact</li>
          </div>
       </ul> 
    </nav>
    </>
    )
}

export default withRouter(sideNavigationItems)
