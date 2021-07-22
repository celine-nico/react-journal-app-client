import React, { Component } from 'react'; 
import { connect } from 'react-redux';

import { addJournal } from './actions/journalsActions'

class JournalsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: "",
            entry: "",
            emotion: "content"
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addJournal(this.state)
        this.setState({ 
            date: "",
            entry: "",
            emotion: "content"
        })
    }

    render() {
        return (
            <form className="form-style-3" onSubmit={this.handleSubmit}>

                <input 
                    type="date" 
                    value={this.state.date} 
                    name="date" 
                    placeholder="Enter Today's Entry Date" 
                    onChange={this.handleChange} 
                />
                <br />
                <textarea 
                    value={this.state.entry}
                    name="entry" 
                    placeholder="Enter Your Thoughts"
                    onChange={this.handleChange}
                />
                <br />
                <label>How Are You Feeling?:</label>
                <select className="browser-default"
                    value={this.state.emotion}
                    onChange={this.handleChange}
                    name="emotion"
                >
                    <option value="" disabled selected>Choose your option</option>
                    <option value="content">Content</option>
                    <option value="frustrated">Frustrated</option>
                    <option value="confused">Confused</option>
                    <option value="hopeful">Hopeful</option>
                    <option value="calm">Calm</option>
                </select><br /><br />
                <input type='submit' value="Add to Journal" />
            </form>
        );
    }
}

export default connect(null, { addJournal }) (JournalsForm);