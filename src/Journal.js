import React from 'react';

class Journal extends React.Component {


    render() {
        let entryDate = new Date(this.props.entry.date).toLocaleDateString()
        console.log(entryDate)
        return ( 
    
            <div className="entry" style={{textAlign: 'center'}}>
                <h4>{entryDate}</h4>
                <h4>{this.props.entry.entry}</h4>
                
            </div>

            
        )

    }
    
}

export default Journal
