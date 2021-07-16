import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchJournals } from './actions/journalsActions'
import JournalsForm from './JournalsForm'

class journalsContainer extends Component {

    componentDidMount() {
        this.props.fetchJournals()
    }
    render() {
        return (
            <div>
                I am not doing well
                <JournalsForm />
            </div>
        )
    }
}

export default connect(null, { fetchJournals })(journalsContainer);