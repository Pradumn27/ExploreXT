import React, { useState } from 'react'
import "./Search.css"

function Search() {

    const [searcht, setSearcht] = useState("")

    return (
        <div className="inp">
            <input type="text" placeholder="Search..." onChange={(e) => setSearcht(e.target.value)} />
        </div>
    )
}

export default Search
