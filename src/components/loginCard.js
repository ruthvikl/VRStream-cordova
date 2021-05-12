import React from "react";
import Card from "@material-ui/core/Card";
import axios from "axios";
import { Redirect, Route } from "react-router-dom";
export default class LoginCard extends React.Component {
  state = {};
  // Update the login using the  API
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.username,
      password: this.password,
    };

    console.log(data);
    axios
      .post("login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.id_token);
        this.setState({ loggedIn: true });
      })
      
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    if (this.state.loggedIn) {
      
      return <Route><Redirect to="/lectures"/></Route>;
    } else {

      return (
        <Card className="login-card">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group m-3">
              <label style={{ float: "left" }}>Username</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your username"
                onChange={(e) => (this.username = e.target.value)}
              ></input>
            </div>
            <div className="form-group m-3">
              <label style={{ float: "left" }}>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={(e) => (this.password = e.target.value)}
              ></input>
            </div>
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label
                className="form-check-label "
                for="flexCheckChecked"
                style={{ float: "left", fontWeight: "bold" }}
              >
                Remember me and keep me logged in
              </label>
            </div>
            <button
              className="btn btn-primary btn-block "
              style={{
                width: "80%",
                backgroundImage: "linear-gradient(180deg, #59b860, #01ab98)",
                border: "0px",
                marginTop: "5%",
              }}
            >
              Login
            </button>
            
          </form>
        </Card>
      );
    }
  }
}
