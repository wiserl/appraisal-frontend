 import React, { Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { ...props.login };
  }
  render() {
    return (
      <form onSubmit={e => {
        e.preventDefault();

        console.log('State', this.state);
        console.log('Props', this.props.login);


        this.props.onLoginSaved(this.state);
      }}>
    
      
        
          <input type="text" placeholder=" First Name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} required minLength="3" />
        
        
          <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={e => this.setState({ lastName: e.target.value })} required minLength="3" />
        
        <div>
            <label for="email">E-mail:</label>
            <input type="text" id="mail" name="user_mail" placeholder="name@name.com" required/>
        </div>
        
       

        
          <button type="submit">Login</button>
        
      </form>
    )
  }
}
export default Login;