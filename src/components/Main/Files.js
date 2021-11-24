import React, { useContext, useEffect } from 'react'
import "./Files.css"
import { useFolder } from '../../hooks/useFolder';
import File from './File';
import { GlobalContext } from '../../Context/GlobalState';

function Files() {

    const { currentFolderId } = useContext(GlobalContext)
    let i = 0
    const { childFiles, childIds } = useFolder(currentFolderId);

    useEffect(() => {

    }, [childFiles])
    return (
        <>
            <div className="files">
                {childFiles.length > 0 && childIds && childFiles.map(childFile => (
                    <>
                        <File key={childFile.id} index={i++} childFile={childFile} childIds={childIds} />
                    </>)
                )}
            </div>
        </>
    )
}

export default Files