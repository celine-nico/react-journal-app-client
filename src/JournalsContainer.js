import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchJournals } from './actions/journalsActions'
import Journal from './Journal'
import JournalsForm from './JournalsForm'

class JournalsContainer extends Component {    
    constructor(props) {
        super()
        this.state = {
            order: false
        }
    }
    // I created the state of order to help with the sorting of the entries. this state is only applicable to
    // this component.
    componentDidMount() {
        this.props.fetchJournals()
    }

    handleClick = (e) => {
        this.setState(prevState => ({
            order: !prevState.order
        }))
    }
    
    render() {
        // I created the if-statement in case the order is true or false
        if (this.state.order === true) {
            return (
                <div>
                    <button onClick ={this.handleClick} value={this.state.order} name="order">{this.state.order? 'SORT:DESC' : 'SORT:ASC'}</button>
                    <h3 style={{textAlign: 'center'}}>ALL ENTRIES</h3>
                    {[...this.props.entry].sort((a,b) => a.date.localeCompare(b.date)).map(entry => (
                        // I use the space separator to prevent the array from being mutated 
                        <>
                            <Journal key={entry.id} entry={entry} />
                        </>
                    ))}
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick ={this.handleClick} value={this.state.order} name="order">{this.state.order? 'SORT:DESC' : 'SORT:ASC'}</button>
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
}

function mapStateToProps(state) {
    return {entry: state.journalsReducer}
}

export default connect(mapStateToProps, { fetchJournals })(JournalsContainer);