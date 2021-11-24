const AppReducer = (state, action) => {
    switch (action.type) {
        case 'CURRENT_FOLDER_ID':
            return {
                currentFolderId: action.payload
            }
        default:
            return state;
    }
}

export default AppReducer;