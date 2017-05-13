import React, { Component } from 'react';
import Region from './RegionFormat';



export default class extends Component {

  constructor(props) {
    super(props);

    this.state = { regions: [] };
  }


  componentDidMount() {
    fetch(`http://localhost:5000/regions/`)
      .then(response => response.json())
      .then(regions => this.setState({ regions }))
      .catch(console.error);
  }

 
  render() {

   

    return (
      <div>
        <h1>Regions</h1>

         {this.state.regions.map(regions => Region(regions))}
         <li><a href="http://localhost:3000/menu">menu</a></li>

      </div>
    );
  }
}