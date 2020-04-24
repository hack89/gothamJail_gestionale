import React from 'react'
import {Link} from 'react-router-dom'
import GuardIcon from '../../../assets/guard.svg'
import CriminalIcon from '../../../assets/criminal.svg'
import ReportIcon from '../../../assets/file.svg'
import './navbar.scss'
const Navbar = () => {
    return (
        
        <nav className="navbar">
            <ul className="nav-ul">
                <img id="icon_guard" src={GuardIcon} alt="" />
                <h3>OFFICERS</h3>
                <Link to='/officers'><li id="officerListMenu">officers list</li></Link>
                <Link to='/addOfficer'> <li id="addOfficerMenu">add officer</li></Link>
                <hr/>
                <img id="icon_criminal" src={CriminalIcon} alt="" />
                <h3>CRIMINALS</h3>
                <Link to='/criminals'><li id="criminalsListMenu">criminals list</li></Link>
                <Link to='/addCriminal'> <li id="addCriminalsMenu">add criminal</li></Link>
                <hr/>
                <img id="icon_file" src={ReportIcon} alt="" />
                <h3>REPORT</h3>
                <Link to='/reports'><li id="reportMenu">search report</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar
