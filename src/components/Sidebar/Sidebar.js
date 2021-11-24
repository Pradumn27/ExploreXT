import React from 'react'
import Lock from './Lock/Lock';
import SideFolders from './SideFolders';
import SideHeader from './SideHeader';
import "./Sidebar.css"

function Sidebar() {

    return (
        <div className="left-sidebar">
            <SideHeader />
            <SideFolders />
            <Lock />
        </div>
    )
}

export default Sidebar