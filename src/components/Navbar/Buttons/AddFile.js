import React, { useState } from 'react'
import "./Buttons.css"
import document from "../../../assets/document.png"
import { database } from '../../Firebase/firebase'

function AddFile({ currentFolder }) {

    const [modal, setModal] = useState(false)
    const [file, setFile] = useState("")
    const handleClick = () => {
        setModal(!modal)
    }

    const handleFileClick = () => {

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
    }

    return (
        <>
            <h5 className="modal-heading" onClick={() => handleClick()}>File</h5>
            {modal && (<div className="modal">
                <div className="in-modal">
                    <div className="modal-inp">
                        <img className="modal-img" src={document} alt="doc" />
                        <div className="inp">
                            <input type="text" placeholder="Enter File name.." onChange={(e) => setFile(e.target.value)} />
                        </div>
                    </div>
                    <div onClick={() => handleFileClick()} className="modal-btn">Create File</div>
                </div>
            </div>)}
        </>
    )
}

export default AddFile