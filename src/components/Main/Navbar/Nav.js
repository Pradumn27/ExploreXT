import React from 'react'
import Add from './Add';
import Search from './Search/Search';
import "./Nav.css"
import FolderBreadcrumbs from './Breadcrumb/FolderBreadcrumb';

function Nav() {

    return (
        <div className="right-top">
            <FolderBreadcrumbs />
            <Search />
            <Add />
        </div>
    )
}

export default Nav