import React from 'react';
import { connect } from 'react-redux'

import { fetchJournals } from './actions/journalsActions'
import Router from './Router'
import JournalsContainer from './JournalsContainer'
import Header from './Header'
import NavBar from './NavBar';
import Footer from './Footer'

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Router />
        <Footer />
      </div>
    );
  }
};

export default connect(null, { fetchJournals })(App);



















// import logo from './logo.svg';
// import './App.css';
// import React from 'react'
// import Journal from "./Journal.js"


// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       date: "",
//       entry: "",
//       emotion: "content"
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(event) {
//     const {name, value} = event.target
//     this.setState({ [name]: value })
//   }

//   render() {
//     return (
//       <div>
//         <Journal />

//         <form onSubmit={this.handleSubmit}>
//           <input 
//             type="text" 
//             value={this.state.date} 
//             name="date" 
//             placeholder="Enter Today's Entry Date" 
//             onChange={this.handleChange} 
//           />
//           <br />
//           <textarea 
//             value={this.state.entry}
//             name="entry" 
//             placeholder="Enter Your Thoughts"
//             onChange={this.handleChange}
//           />
//           <br />
//           <label>How Are You Feeling?:</label>
//           <select 
//             value={this.state.emotion}
//             onChange={this.handleChange}
//             name="emotion"
//           >
//             <option value="content">Content</option>
//             <option value="frustrated">Frustrated</option>
//             <option value="confused">Confused</option>
//             <option value="hopeful">Hopeful</option>
//             <option value="calm">Calm</option>
//           </select>

//           <h1>{this.state.date}</h1>
//           <h2>{this.state.entry}</h2>
//           <h2>You are feeling {this.state.emotion}</h2>
//           <button>Submit</button>

//         </form>
//       </div>
//     )

//   }
// }

// export default App;
