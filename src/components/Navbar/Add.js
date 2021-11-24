import React, { useContext, useState } from 'react'
import plus from "../../assets/plus.JPG"
import { GlobalContext } from '../../Context/GlobalState';
import { useFolder } from '../../hooks/useFolder';
import "./Add.css"
import AddFile from './Buttons/AddFile';
import AddFolder from './Buttons/AddFolder';

function Add() {

    const { currentFolderId } = useContext(GlobalContext)
    const { folder } = useFolder(currentFolderId)

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className="plus">
            <img onClick={() => handleClick()} className="logo" src={plus} alt="Logo" />
            {open && (
                <div className={open ? "dropdown" : "dropdown clicked"}>
                    <AddFile currentFolder={folder} />
                    <AddFolder currentFolder={folder} />
                </div>
            )}
        </div>
    )
}

export default Add