import React, { useState } from 'react'
import "./Buttons.css"
import document from "../../../../assets/document.png"
import { database } from "../../../../Firebase/firebase"
import { ROOT_FOLDER } from "../../../../hooks/useFolder"

function AddFolder({ currentFolder, setOpen }) {

    const [modal, setModal] = useState(false)
    const [folder, setFolder] = useState("")

    const handleClick = () => {
        setModal(!modal)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
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
        setOpen(false)
    }

    return (
        <>
            <h5 className="modal-heading" onClick={() => handleClick()}>Folder</h5>
            {modal && (<div className="modal">
                <div className="in-modal">
                    <div className="modal-inp">
                        <form onSubmit={(e) => handleSubmit(e)} className="formm">
                            <div className="inpp">
                                <img className="modal-img" src={document} alt="doc" />
                                <input type="text" className="add-inp" placeholder="Enter Folder name.." onChange={(e) => setFolder(e.target.value)} />
                            </div>
                            <input type="submit" className="modal-btn" value="Create Folder" />
                        </form>
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default AddFolder