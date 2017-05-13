import React, { Component } from "react";
import {Link} from 'react-router';

export default class NewAppraisal extends Component {
  constructor( props ){
    super( props );
    this.state = { appraisal: {} };
  }

// `https://limitless-river-27779.herokuapp.com/appraisals`

  createAppraisal = appraisal => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch(`http://localhost:5000/appraisals`, {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify(appraisal),
      headers: myHeaders
    })
      .catch(err => console.error(err));
  }

  componentDidMount(){
  }

  handleSubmit = e => {
    e.preventDefault();
    let appraisal= {}
   
    appraisal.email= this.state.email;
    appraisal.type= this.state.type;
    appraisal.start= this.state.start;
    appraisal.end= this.state.end;
    appraisal.address=this.state.address;
    
    this.createAppraisal(appraisal);
  }

  render(){
    return (
      
      <div>
      
      <h1>Add An Appraisal!</h1>
        <form onSubmit={this.handleSubmit} method="post" name="form">
          
         
          
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
            <label htmlFor="Type">Type</label>
            <textarea
              type="text"
              id="type"
              name="type"
              onChange={ e => this.setState({ type: e.target.value })}
            ></textarea>
          </div>
          <div>
          <label htmlFor="start">Start</label>
          <input
          type="date"
          id="start"
          name="start"
          onChange={ e => this.setState({ start: e.target.value })}
          /></div>
          <div>
          <label htmlFor="end">end</label>
            <input
            type="date"
            id="end"
            name="end"
            onChange={ e => this.setState({ end: e.target.value })}
            /></div>
             <div>
          <label htmlFor="address">address</label>
            <input
            type="text"
            id="end"
            name="end"
            onChange={ e => this.setState({ address: e.target.value })}
            /></div>
          
          <div className="button">
            <button type="submit">Save</button>
          </div>
        </form>
        <li><a href="http://localhost:3000/menu">menu</a></li>
        
      </div>
    )
  }
}
