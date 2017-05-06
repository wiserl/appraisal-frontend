import React, { Component } from 'react';
import Requester from './RequesterFormat';



export default class extends Component {

  constructor(props) {
    super(props);

    this.state = { requesters: [] };
  }

  /**
   * Why do we have to call the api function here?
   */
  componentDidMount() {
    fetch(`http://localhost:5000/requesters/`)
      .then(response => response.json())
      .then(requesters => this.setState({ requesters }))
      .catch(console.error);
  }

  // Called when the state changes...
  render() {

    // Why is it bad to put fetch in here....?

    return (
      <div>
        <h1>Requesters</h1>

         {this.state.requesters.map(requesters => Requester(requesters))}

      </div>
    );
  }
}