import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/login';


class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      authUser: localStorage.getItem('auth')
    }

    console.log('login cont. :',this.props);
  }


  handleChangeUsername(event){
    this.setState({
      username: event.target.value
    })
  }

  handleChangePassword(event){
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    let newUser = {
      username: this.state.username,
      password: this.state.password
    }
      this.props.loginUser(newUser);
  }



  render(){
    return (
      <div id="login-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.username} placeholder="username" onChange={this.handleChangeUsername.bind(this)}/>
          <input type="password" value={this.state.password} placeholder="password" onChange={this.handleChangePassword.bind(this)}/>
          <input type="submit" className="button" value="Login"/>
        </form>
      </div>


    )
  }


}


const ConnectedLogin = connect(
  null,
  {loginUser}
)(Login);

export default ConnectedLogin;