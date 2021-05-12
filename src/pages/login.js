import { Typography } from "@material-ui/core";
import React from "react";
import LoginCard from "../components/loginCard";

export default class LoginPage extends React.Component {
  render(){
  return (
    <div style={{}}>
      <div
        style={{ padding: "0", height: "40vh",display:'flex',alignItems:'center',justifyContent:'center',backgroundImage:'linear-gradient(180deg, #01ab98, #59b860)'}}
      >
        <div className="topright-btn" >
         <a href="/login"style={{textDecoration:'none',color:'#fff'}}> <span>SIGN IN</span></a>
         <a href="/signup" style={{textDecoration:'none',color:'#fff'}}> <span>SIGN UP</span></a>
        </div>
        <div>
        <img
          src={
            "data:image/png;base64,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"
          }
          style={{width:'30%'}}
        ></img>
        </div>
        <div className="login-title">
          <Typography
            align="left"
            style={{ color: "#fff", fontWeight: "bold", fontSize: "30px" }}
          >
            Welcome, Back
          </Typography>
          <Typography
            align="left"
            style={{ marginBottom: "5%", color: "#fff" }}
          >
            Sign In to continue
          </Typography>
        </div>
</div>

      <div style={{
          backgroundImage: "linear-gradient(180deg, #59b860, #01ab98)",
          height: "60vh"}}>
            
          <LoginCard setLectures = {this.props.setLectures}/>
        </div>
    </div>
  
  );
      }
}
