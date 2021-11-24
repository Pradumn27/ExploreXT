import React, { useState } from 'react'
import document from "../../assets/document.png";
import { database } from '../Firebase/firebase';

function File({ childFile, childIds, index }) {

    const [desc, setDesc] = useState(childFile.description);
    const [modal, setModal] = useState(false);


    const handleFileClick = () => {
        var id = Object.entries(childIds)[index][1];
        database.files.doc(id).update({
            "description": desc,
        })
        setModal(false)
    }


    return (
        <>
            <div className="file" onClick={() => setModal(true)}>
                <img className="document" src={document} alt="doc" />
                <h4>{childFile.name}</h4>
            </div>
            {modal && (<div className="modal">
                <div className="in-modall">
                    <div className="modall-inp">
                        <img className="modall-img" src={document} alt="doc" />
                        <h4>{childFile.name}</h4>
                    </div>
                    <div className="inp">
                        <textarea cols={70} rows={17} defaultValue={desc} onChange={(e) => setDesc(e.target.value)} />
                    </div>
                    <div onClick={() => handleFileClick()} className="modall-btn">Save File</div>
                </div>
            </div>
            )}
        </>
    )
}

export default File
