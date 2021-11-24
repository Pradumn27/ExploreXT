import React, { useContext, useState } from 'react'
import "./Buttons.css"
import document from "../../../assets/document.png"
import { database } from "../../Firebase/firebase"
import { ROOT_FOLDER, useFolder } from "../../../hooks/useFolder"
import { GlobalContext } from '../../../Context/GlobalState'

function AddFolder({ currentFolder }) {

    const [modal, setModal] = useState(false)
    const [folder, setFolder] = useState("")

    const handleClick = () => {
        setModal(!modal)
    }
    const handleClickModal = () => {
        if (currentFolder == null) {
            setModal(false);
            return
        }

        const path = [...currentFolder.path]
        if (currentFolder !== ROOT_FOLDER) {
            path.push({ name: currentFolder.name, id: currentFolder.id })
        }

        database.folders.add({
            name: folder,
            parentId: currentFolder.id,
            path: path,
            createdAt: database.getCurrentTimestamp(),
        })
        setFolder("")
        setModal(false)
    }

    return (
        <>
            <h5 className="modal-heading" onClick={() => handleClick()}>Folder</h5>
            {modal && (<div className="modal">
                <div className="in-modal">
                    <div className="modal-inp">
                        <img className="modal-img" src={document} alt="doc" />
                        <div className="inp">
                            <input type="text" placeholder="Enter Folder name.." onChange={(e) => setFolder(e.target.value)} />
                        </div>
                    </div>
                    <div onClick={() => handleClickModal()} className="modal-btn">Create Folder</div>
                </div>
            </div>)}
        </>
    )
}

export default AddFolder