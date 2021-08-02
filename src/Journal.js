import React from 'react';
import Like from './Like'

class Journal extends React.Component {


    render() {
        let entryDate = new Date(this.props.entry.date).toLocaleDateString()
        console.log(entryDate)
        return ( 
    
            <div className="entry" style={{textAlign: 'center'}}>
                <h4>{entryDate}</h4>
                <h4>{this.props.entry.entry}</h4>
                <Like />
                
            </div>

            
        )

    }
    
}

export default Journal
