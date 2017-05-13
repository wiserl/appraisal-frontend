import React, { Component } from 'react';
// import Appraisal from './TurnTimeFormat';


export default class TurnTime extends Component {

  constructor() {
    super();
    this.state = { appraisalTypes: {}, region: 'Colorado' };
    // we need to re-bind the method so it is called with the TurnTime as its call object context... meaning, we scope the method to this class. (TurnTime)
    this.getAppraisalTypeByRegion = this.getAppraisalTypeByRegion.bind(this);
  }

  getAppraisalTypeByRegion() {
    let region = this.refs.region.value;
    if(region){
    fetch(`http://localhost:5000/appraisalTypes/${region}`, { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(appraisalTypes => {
        let appraisalType = appraisalTypes[0];
        this.setState({ appraisalTypes: appraisalType, region });
        console.log(appraisalTypes._turnTime)
      })
      .catch(err => console.error(err));
    }
  }

  componentDidMount() {
   
    // this.getAppraisalTypeByRegion();
  }

render() {

    return (
    <div>
         <h1>Get Turn Times</h1>
        <input type="text" defaultValue={this.state.region} ref="region" />
        <input type="button" onClick={e => this.getAppraisalTypeByRegion()}  />
        <p>Average Cost: {this.state.appraisalTypes._cost}</p>
         <p>Average Turn Time:{this.state.appraisalTypes._turnTime}</p>
          <p>Type:{this.state.appraisalTypes._type}</p>
      </div>
    )
  }

}