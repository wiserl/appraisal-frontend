import React, { Component } from 'react';
import Region from './RegionFormat';



export default class extends Component {

  constructor(props) {
    super(props);

    this.state = { regions: [] };
  }

  /**
   * Why do we have to call the api function here?
   */
  componentDidMount() {
    fetch(`http://localhost:5000/regions/`)
      .then(response => response.json())
      .then(regions => this.setState({ regions }))
      .catch(console.error);
  }

  // Called when the state changes...
  render() {

    // Why is it bad to put fetch in here....?

    return (
      <div>
        <h1>Regions</h1>

         {this.state.regions.map(regions => Region(regions))}

      </div>
    );
  }
}