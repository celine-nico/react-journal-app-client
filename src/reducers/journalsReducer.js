export const journalsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_JOURNALS':
            return [...action.payload]
        case 'ADD_JOURNAL':
            return [action.payload,...state]
        default:
            return state 
    }
}