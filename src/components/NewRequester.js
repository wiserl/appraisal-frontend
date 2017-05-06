import React, { Component } from "react";

export default class NewRequester extends Component {
  constructor( props ){
    super( props );
    this.state = { requester: {} };
  }

  createRequester = requester => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch(`http://localhost:5000/requesters/`, {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify(requester),
      headers: myHeaders
    })
      .catch(err => console.error(err));
  }

  componentDidMount(){
  }

  handleSubmit = e => {
    e.preventDefault();
    let requester= {}
    
    requester.name= this.state.name;
    requester.email= this.state.email;
    requester.appraisals= this.state.appraisals
    
    this.createRequester(requester);
  }

  render(){
    return (
      <div>
      <h1>Add a Requester!</h1>
        <form onSubmit={this.handleSubmit} method="post" name="form">
          
          <div>
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              id="Name"
              name="Name"
              onChange={ e => this.setState({ name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <textarea
              type="text"
              id="email"
              name="email"
              onChange={ e => this.setState({ email: e.target.value })}
            ></textarea>
          </div>
          <div>
            <label htmlFor="appraisals">Appraisals</label>
            <input
              type="text"
              id="appraisals"
              name="appraisals"
              onChange={ e => this.setState({ appraisals: e.target.value })}
            />
          </div>
          
          <div className="button">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    )
  }
}
