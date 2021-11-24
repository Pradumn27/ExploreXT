import React, { useContext } from 'react'
import "./Files.css"
import { useFolder } from '../../hooks/useFolder';
import File from './File';
import { GlobalContext } from '../../Context/GlobalState';

function Files() {

    const { currentFolderId, search } = useContext(GlobalContext)
    let i = 0
    const { childFiles, childIds } = useFolder(currentFolderId);
    return (
        <>
            <div className="files">

                {search ?
                    (childFiles.length > 0 && childIds && childFiles.map(childFile => (
                        <>
                            {(childFile.name.includes(search.search) || childFile.description.includes(search.search)) && (
                                <File key={childFile.id} index={i++} childFile={childFile} childIds={childIds} />
                            )}
                        </>)
                    ))
                    :
                    (childFiles.length > 0 && childIds && childFiles.map(childFile => (
                        <>
                            <File key={childFile.id} index={i++} childFile={childFile} childIds={childIds} />
                        </>)
                    ))
                }
            </div>
        </>
    )
}

export default Files