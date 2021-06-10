import React from "react";
import "./Login-page.stylesheet.css";
import { connect } from 'react-redux';
import { statusPromptAction } from "../redux/status-prompt/status-prompt.action";
import {setUser} from '../redux/user/user.action';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      password: "",
      email: "",
    };
  }
  onChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let msg = "";
    if(this.state.name===""){
      msg = `Enter your name`;
      return this.props.msgToStatusPrompt(msg);
    }
    if(this.state.email===""){
      msg = `Enter your email`;
      return this.props.msgToStatusPrompt(msg);
    }
    if(this.state.password===""){
      msg = `Enter your password`;
      return this.props.msgToStatusPrompt(msg);
    }
    if(this.state.phone===""){
      msg = `Enter your phone number`;
      return this.props.msgToStatusPrompt(msg);
    }else{
      return this.props.setUser(this.state); 

    }
  
  };
  render() {
    return (
      <div className="login-page">
        <form onSubmit={this.handleSubmit} className="login-div">
            <h1>Login</h1>
            <label>Name</label>
            <input type="text" name="name" onChange={this.onChange} />
            <label>Email</label>
            <input type="email" name="email" onChange={this.onChange} />
            <label>Password</label>
            <input type="password" name="password" onChange={this.onChange} />
            <label>Number</label>
            <input type="number" name="phone" onChange={this.onChange} />
            <button type="submit" className="btn">
              Submit
            </button>
        </form>
      </div>
    );
  }
}

const dispatchStateToProps = dispatch => ({
  msgToStatusPrompt:msg=>dispatch(statusPromptAction(msg)),
  setUser:user=>dispatch(setUser(user))
})

export default connect(null, dispatchStateToProps)(LoginPage);
