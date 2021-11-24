import React, { useContext } from "react"
import { GlobalContext } from "../../../Context/GlobalState"
import { ROOT_FOLDER, useFolder } from "../../../hooks/useFolder"
import "./Breadcrumb.css"

export default function FolderBreadcrumbs() {

  const { currentFolderId, changeFolder } = useContext(GlobalContext)
  const { folder: currentFolder } = useFolder(currentFolderId)

  let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER]
  if (currentFolder) path = [...path, ...currentFolder.path]

  const handleClick = (e) => {
    changeFolder(e)
  }

  return (
    <div className="breadcrumb" >
      <ul>
        {path.map((folder) => (
          <li key={folder.id} className="bread-li">
            <h4 onClick={() => handleClick(folder.id)}>
              {folder.name} /
            </h4>
          </li>
        ))}
        {currentFolder && (
          <li className="bread-li">
            {currentFolder.name}
          </li>
        )}
      </ul>
    </div>
  )
}