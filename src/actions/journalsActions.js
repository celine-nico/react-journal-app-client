
export const fetchJournals = () => {
    return (dispatch) => {
        fetch("http://127.0.0.1:3000/journals")
        .then(response => response.json())
        .then(journals => dispatch({ type: 'FETCH_JOURNALS', payload: journals }))
    }
}

export const addJournal = journal => {
    return dispatch => {

        fetch("http://127.0.0.1:3000/journals", { 
            method: 'POST',
            body: JSON.stringify(journal),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(journal => dispatch({ type: 'FETCH_JOURNALS', payload: journal }))
    }
}