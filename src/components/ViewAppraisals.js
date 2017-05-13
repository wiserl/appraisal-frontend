import React, { Component } from 'react';
import Appraisal from './AppraisalFormat';




export default class extends Component {

  constructor(props) {
    super(props);

    this.state = { appraisals: [] };
  }

  
  componentDidMount() {
    fetch(`http://localhost:5000/appraisals/`)
      .then(response => response.json())
      .then(appraisals => this.setState({ appraisals }))
      .catch(console.error);
  }

  render() {

 

    return (
      <div>
      
        <h1>List of appraisals</h1>

         {this.state.appraisals.map(appraisals => Appraisal(appraisals))}
         <li><a href="http://localhost:3000/menu">menu</a></li>

      </div>
    );
  }
}