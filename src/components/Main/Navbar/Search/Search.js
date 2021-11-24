import React, { useContext, useState } from 'react'
import "./Search.css"
import { BsSearch } from "react-icons/bs"
import { GlobalContext } from '../../../../Context/GlobalState'

function Search() {

    const { currentFolderId, changeSearch } = useContext(GlobalContext)
    const handleChange = (e) => {
        changeSearch(e.target.value)
    }

    return (
        <div className="inp">
            <input type="text" className="input" placeholder="Search..." onChange={(e) => handleChange(e)} />
            <BsSearch />
        </div>
    )
}

export default Search