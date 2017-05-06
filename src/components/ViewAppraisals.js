import React, { Component } from 'react';
import Appraisal from './AppraisalFormat';



export default class extends Component {

  constructor(props) {
    super(props);

    this.state = { appraisals: [] };
  }

  /**
   * Why do we have to call the api function here?
   */
  componentDidMount() {
    fetch(`http://localhost:5000/appraisals/`)
      .then(response => response.json())
      .then(appraisals => this.setState({ appraisals }))
      .catch(console.error);
  }

  // Called when the state changes...
  render() {

    // Why is it bad to put fetch in here....?

    return (
      <div>
        <h1>List of appraisals</h1>

         {this.state.appraisals.map(appraisals => Appraisal(appraisals))}

      </div>
    );
  }
}