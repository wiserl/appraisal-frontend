import React, {Component} from "react";

export default class ViewRequester extends Component {
  constructor( props ){
    super( props );
    this.state = { requesters: {}, name: '1' };
  }

    getItemByName(name){
      fetch(`http://localhost:5000/requesters/${name}`, { method: 'GET', mode: 'cors' })
        .then(response => response.json())
        .then(requesters => {
          let requester = requesters[0];
          this.setState({requester, name});
        })
        .catch(err => console.error(err));
    }

    componentDidMount(){
      this.getItemByName(1);
    }


  render(){
    return (
      <div>
        <h1>{this.state.requester.name}</h1>
        <p>Details: <br />
          {this.state.requester.email}
        </p>
        <p>Created By: {this.state.item.appraisals}</p>
        
      </div>
    )
  }
}