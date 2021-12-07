import React, { Component } from "react";
import loginImg from '../../assets/images/mindworx-logo.png'
import history from './history';

export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Username: "",

      Email: "",

      Password: "",

      // Verified:""
    };

    this.Username = this.Username.bind(this);

    this.Email = this.Email.bind(this);

    this.Password = this.Password.bind(this);

    // this.Verified = this.Verified.bind(this);

    this.register = this.register.bind(this);
  }

  Username(event) {
    this.setState({ Username: event.target.value });
  }

  Email(event) {
    this.setState({ Email: event.target.value });
  }

  Password(event) {
    this.setState({ Password: event.target.value });
  }

  register(event) {
    fetch("https://localhost:44391/Api/loggingin/Register", {
      method: "post",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        Username: this.state.Username,

        Password: this.state.Password,

        Email: this.state.Email,

        // Verified:this.state.Verified,
      }),
    })
      .then((Response) => Response.json())

      .then((Result) => {
        if (Result.Status == "Success") history.push("/profile");
        else alert("You are an unauthenticated user.");
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
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={this.Username} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" onChange={this.Email} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" onChange={this.Password} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={this.register} type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
