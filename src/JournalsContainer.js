import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchJournals } from './actions/journalsActions'
import Journal from './Journal'
import JournalsForm from './JournalsForm'
import JournalsList from './JournalsList'

class JournalsContainer extends Component {    

    render() {

        return (
            <div>
                
                <h3 style={{textAlign: 'center'}}>ALL ENTRIES</h3>
                {this.props.entry.map(entry => (
                    
                    <>
                        <Journal key={entry.id} entry={entry} />
                    </>
    
                    
                    
    
                ))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {entry: state.journalsReducer}
}

export default connect(mapStateToProps)(JournalsContainer);