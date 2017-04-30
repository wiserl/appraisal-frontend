import React, { Component } from "react";

export default class NewAppraisalType extends Component {
  constructor( props ){
    super( props );
    this.state = { appraisalType: {}, id: '1' };
  }

  createAppraisalType = appraisalType => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch(`http://localhost:5000/appraisalTypes/`, {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify(appraisalType),
      headers: myHeaders
    })
      .catch(err => console.error(err));
  }

  componentDidMount(){
  }

  handleSubmit = e => {
    e.preventDefault();
    let appraisalType= {}
    appraisalType.id= "4321";
    appraisalType.type= this.state.type;
    appraisalType.cost= this.state.cost;
    appraisalType.turnTime= this.state.turnTime
    appraisalType.region= this.state.region;
    this.createAppraisalType(appraisalType);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} method="post" name="form">
          <div>
            <label htmlFor="Type">Type</label>
            <input
              type="text"
              id="summary"
              name="Summary"
              onChange={ e => this.setState({ type: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="Cost">Average Cost</label>
            <textarea
              type="text"
              id="cost"
              name="cost"
              onChange={ e => this.setState({ cost: e.target.value })}
            ></textarea>
          </div>
          <div>
            <label htmlFor="turnTime">Turn Time</label>
            <input
              type="text"
              id="turnTime"
              name="turnTime"
              onChange={ e => this.setState({ turnTime: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="Region">Region</label>
            <input
              type="text"
              id="region"
              name="region"
              onChange={ e => this.setState({ region: e.target.value})}
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
