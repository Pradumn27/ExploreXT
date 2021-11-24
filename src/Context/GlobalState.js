import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    currentFolderId: null,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function changeFolder(id) {
        dispatch({
            type: 'CURRENT_FOLDER_ID',
            payload: id
        })
    }

    return (<GlobalContext.Provider value={{
        currentFolderId: state.currentFolderId,
        changeFolder
    }}>
        {children}
    </GlobalContext.Provider>)
}