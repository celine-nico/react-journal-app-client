export const journalsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_JOURNALS':
            return action.payload
        case 'ADD_JOURNAL':
            return [...state, action.payload]
        default:
            return state 
    }
}