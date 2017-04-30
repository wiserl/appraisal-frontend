import React, {Component} from "react";

export default class ViewRequester extends Component {
  constructor( props ){
    super( props );
    this.state = { ...props.region };
  }

  render(){
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p> <br />
          Email:{this.state.email}
        </p>
        <p># of appraisals: {this.state.appraisals}</p>
        <p>location: {this.state.location}</p>
      </div>
    )
  }
}