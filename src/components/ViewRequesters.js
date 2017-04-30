import React, {Component} from "react";

export default class ViewRequesters extends Component {
  constructor( props ){
    super( props );
    this.state = { requesters: {} };
    console.log(this.state);
  }

  getRequesters(){
    fetch(`http://localhost:5000/requesters`, { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(requesters => {
        
        this.setState({requesters});
        console.log("Test");
        console.log(requesters);
      })
 .catch(err => console.error(err));  }

  componentDidMount(){
    this.getRequesters();
  }

  render(){
    return (
      <div>
        <h1>{this.state.requesters._name}</h1>
        <p>Email: <br />
          {this.state.requesters._email}
        
        </p>
        <p> number of appraisals: {this.state.requesters._appraisals}</p>
       
      </div>
      
      
      
    )
  }
}