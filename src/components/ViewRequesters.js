import React, {Component} from "react";

export default class ViewRequester extends Component {
  constructor( props ){
    super( props );
    this.state = { ...props.item };
  }

  render(){
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>Email: {this.state.email}<br />
         
        </p>
        <p> Appraisals: {this.state.appraisals}</p>
        <p> Location: {this.state.location}</p>
      </div>
    )
  }
}