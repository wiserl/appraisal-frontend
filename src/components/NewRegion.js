import React, { Component } from "react";

export default class NewRegion extends Component {
  constructor( props ){
    super( props );
    this.state = { region: {} };
  }

  createRegion = region => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch(`http://localhost:5000/regions/`, {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify(region),
      headers: myHeaders
    })
      .catch(err => console.error(err));
  }

  componentDidMount(){
  }

  handleSubmit = e => {
    e.preventDefault();
    let region= {}
    
    region.name= this.state.name;
    region.turnTime= this.state.turnTime;
    region.cost= this.state.cost;
    
    
    this.createRegion(region);
  }

  render(){
    return (
      <div>
      <h1>Add a Region!</h1>
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
            <label htmlFor="turnTime">Turn Time</label>
            <textarea
              type="text"
              id="turnTime"
              name="turnTime"
              onChange={ e => this.setState({ turnTime: e.target.value })}
            ></textarea>
          </div>
          
          
           <div>
            <label htmlFor="cost">Cost</label>
            <textarea
              type="text"
              id="cost"
              name="cost"
              onChange={ e => this.setState({ cost: e.target.value })}
            ></textarea>
          </div>
          
          
          <div className="button">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    )
  }
}
