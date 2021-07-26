import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchJournals } from './actions/journalsActions'
import Journal from './Journal'
import JournalsForm from './JournalsForm'

class JournalsContainer extends Component {    

    componentDidMount() {
        this.props.fetchJournals()
    }

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

export default connect(mapStateToProps, { fetchJournals })(JournalsContainer);