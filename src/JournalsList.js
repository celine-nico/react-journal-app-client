import React from 'react'
import { connect } from 'react-redux'
import Journal from './Journal'

const JournalsList = (props) => {

    return (
        <div>
            <h3 style={{textAlign: 'center'}}>ALL ENTRIES</h3>
            <Journal />
        </div>
    )
}
const mapStateToProps = state => {
    return { journals: state.journalsReducer}
}

export default connect(mapStateToProps)(JournalsList);