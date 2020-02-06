import React, { Component } from 'react'
import logo from './logo.png'

export class Header extends Component {
    render() {
        return (
            <nav className="navbarnavbar-expand-sm navbar-lightbg-light">  
                  <img src={logo} alt= 'website logo' />
            </nav>
        ) 
        }
}

export default Header