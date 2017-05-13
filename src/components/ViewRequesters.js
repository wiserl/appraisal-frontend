import React, { Component } from 'react';
import Requester from './RequesterFormat';



export default class extends Component {

  constructor(props) {
    super(props);

    this.state = { requesters: [] };
  }

 
  componentDidMount() {
    fetch(`http://localhost:5000/requesters/`)
      .then(response => response.json())
      .then(requesters => this.setState({ requesters }))
      .catch(console.error);
  }

  
  render() {

    

    return (
      <div>
        <h1>Requesters</h1>

         {this.state.requesters.map(requesters => Requester(requesters))}
         <li><a href="http://localhost:3000/menu">menu</a></li>

      </div>
    );
  }
}