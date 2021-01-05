import React from 'react'
import { NavLink } from 'react-router-dom'

 const navigationImg = props => {
    return (
         <>
            <li className = "NavigationImg">
              <NavLink to ={props.link}
                exact = {props.exact}
                activeClassName="">
                {props.children}        
              </NavLink>
            </li>
        </>
    )
}

export default navigationImg