import React from 'react'

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        count: 0
      }
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick() {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        }
      })
    }

  
    render() {
      return (
        <div style={{textAlign: 'center'}}>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleClick}>Like!</button>
        </div>
      )
  
    }
  }
  
  export default App