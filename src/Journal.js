import React from 'react';

class Journal extends React.Component {

    componentDidMount() {
        const url = "http://127.0.0.1:3000/journals "
        fetch(url)
        .then(response => response.json())
        .then(console.log)
    }

    render() {
        return (
            <div></div>
        )

    }
    
}

export default Journal
