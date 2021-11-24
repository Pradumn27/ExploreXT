import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    currentFolderId: null,
    search: "",
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
    function changeSearch(some) {
        dispatch({
            type: 'CURRENT_SEARCH',
            payload: { search: some }
        })
    }

    return (<GlobalContext.Provider value={{
        currentFolderId: state.currentFolderId,
        search: state.search,
        changeFolder,
        changeSearch
    }}>
        {children}
    </GlobalContext.Provider>)
}