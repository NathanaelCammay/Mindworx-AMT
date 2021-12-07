import React, { Component } from "react";
import loginImg from '../../assets/images/mindworx-logo.png'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from './history';

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      EmailAddress: "",

      Password: "",
    };

    this.Password = this.Password.bind(this);

    this.EmailAddress = this.EmailAddress.bind(this);

    this.login = this.login.bind(this);
  }

  EmailAddress(event) {
    this.setState({ EmailAddress: event.target.value });
  }

  Password(event) {
    this.setState({ Password: event.target.value });
  }

  login(event) {
    debugger;

    fetch("https://localhost:44391/Api/loggingin/userlogin", {
      method: "post",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        EmailAddress: this.state.EmailAddress,

        Password: this.state.Password,
      }),
    })
      .then((Response) => Response.json())

      .then((result) => {
        console.log(result);

        if (result.Status == "Invalid") alert("Invalid User");
        else history.push("/admin");
      });
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="EmailAddress">EmailAddress</label>
              <input type="text" name="EmailAddress" placeholder="EmailAddress" onChange={this.EmailAddress} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.Password} />
            </div>
          </div>
        </div>
        <div className="forgot-password">
          <label htmlFor="Password retreat"></label>
          <a href=""> Forgot Password?</a>
        </div>
        <div className="footer">
          <button onClick={this.login} type="button" className="btn">
            Log In
          </button>
        </div>
      </div>
    );
  }
}