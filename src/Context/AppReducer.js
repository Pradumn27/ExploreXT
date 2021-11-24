const AppReducer = (state, action) => {
    switch (action.type) {
        case 'CURRENT_FOLDER_ID':
            return {
                ...state,
                currentFolderId: action.payload
            }
        case 'CURRENT_SEARCH':
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
}

export default AppReducer;