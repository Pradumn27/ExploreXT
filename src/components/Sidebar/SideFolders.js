import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalState';
import { useFolder } from '../../hooks/useFolder';
import Folder from './Folder';

function SideFolders() {

    const { childFolders } = useFolder(null)

    return (
        <div className="mid">
            {childFolders.length > 0 && (
                <ul class="active" id="frontEnd">
                    <li>
                        {childFolders.map(childFolder => (
                            <>
                                <Folder key={childFolder.id} folderr={childFolder} />
                            </>
                        ))}
                    </li>
                </ul>
            )}
        </div>
    )
}

export default SideFolders
