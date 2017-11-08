import React, { Component } from 'react';
import { connect } from 'react-redux';


class RegistrationForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    }

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChangeEmail(event){
    this.setState({
      email: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();

    let newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }

    this.props.addUser(newUser);
  }
  render(){
    return (
      <div id="registration-form">
        <form onSubmit="this.handleSubmit">
          <input type="text" value={this.state.username} placeholder="username" onChange={this.handleChangeUsername}/>
          <input type="password" value={this.state.password} placeholder="password" onChange={this.handleChangePassword}/>
          <input type="text" value={this.state.email} placeholder="email address" onChange={this.handleChangeEmail}/>
          <input type="submit" className="button" value="Complete Registration"/>
        </form>
      </div>

    )
  }


}


const ConnectedRegistrationForm = connect(
  null,
)(RegistrationForm);

export default ConnectedRegistrationForm;