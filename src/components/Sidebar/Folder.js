import React, { useContext, useState } from "react"
import { NavLink } from "react-router-dom";
import folderOpen from "../../assets/folder-open.png";
import { GlobalContext } from "../../Context/GlobalState";
import { useFolder } from "../../hooks/useFolder";

export default function Folder({ folderr }) {
    const [show, setShow] = useState(false);
    const { changeFolder } = useContext(GlobalContext)
    const handleClick = () => {
        changeFolder(folderr.id)
        setShow(!show)
    }
    const { childFolders } = useFolder(folderr.id);

    return (
        <>
            <h4
            // to={`/folder/${folderr.id}`}
            >
                <div class="caret"
                    onClick={() => handleClick()}
                >
                    <img src={folderOpen} alt="folder" />
                    <h5>{folderr.name}</h5>
                </div>
            </h4>
            {childFolders.length > 0 && !show && (
                <ul class="active">
                    <li>
                        {childFolders.map(childFolder => (
                            <>
                                <Folder key={childFolder.id} folderr={childFolder} />
                            </>
                        ))}
                    </li>
                </ul>
            )}
        </>
    )
}