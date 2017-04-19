import React, { Component } from 'react';
import './App.css';

import ViewRequester from './components/ViewRequesters.js';


const blah = { email: 'test@test.com', name: 'fafddf', appraisals: 'test appraisal', location: 'test location' };

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Appraisal App</h2>
        </div>
        <p className="App-intro">
          Requesters
        </p>
        <div className="requester">
          <ViewRequester requester={blah} />
          </div>
      </div>
    );
  }
}

export default App;
