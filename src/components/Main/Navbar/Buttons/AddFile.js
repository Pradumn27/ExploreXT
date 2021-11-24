import React, { useState } from 'react'
import "./Buttons.css"
import document from "../../../../assets/document.png"
import { database } from '../../../../Firebase/firebase'

function AddFile({ currentFolder, setOpen }) {

    const [modal, setModal] = useState(false)
    const [file, setFile] = useState("")
    const handleClick = () => {
        setModal(!modal)
    }

    const handleSubmit = () => {

        if (currentFolder == null) {
            setModal(false);
            return
        }

        database.files.add({
            name: file,
            createdAt: database.getCurrentTimestamp(),
            folderId: currentFolder.id,
            description: "",
        })

        setModal(false)
        setOpen(false)
    }

    return (
        <>
            <h5 className="modal-heading" onClick={() => handleClick()}>File</h5>
            {modal && (<div className="modal">
                <div className="in-modal">
                    <div className="modal-inp">
                        <form onSubmit={(e) => handleSubmit(e)} className="formm">
                            <div className="inpp">
                                <img className="modal-img" src={document} alt="doc" />
                                <input type="text" className="add-inp" placeholder="Enter File name.." onChange={(e) => setFile(e.target.value)} />
                            </div>
                            <input type="submit" className="modal-btn" value="Create File" />
                        </form>
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default AddFile