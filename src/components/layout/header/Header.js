import React from 'react'
import {Link} from 'react-router-dom'
import logoGotham from '../../../assets/gotham_logo.png'
import './header.scss'

const Header = () => {
    return (
      
        <header className="header">
            <div className="image_logo">
                <Link to='/'><img id="gotham_logo" src={logoGotham} alt="" /></Link>
            </div>

            <div className="text_header">
                GOTHAM CITY POLICE DEPARTMENT
            </div>
        </header>
        
    )
}

export default Header
