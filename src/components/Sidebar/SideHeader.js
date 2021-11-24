import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
function SideHeader() {
    return (
        <div className="left-top">
            <Link to="/" className="home-link"><img className="logo" src={logo} alt="Logo" /></Link>
            <h2>ExploreXT</h2>
        </div>
    )
}

export default SideHeader
