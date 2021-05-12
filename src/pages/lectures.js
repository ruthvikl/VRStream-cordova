import React, { useState, useEffect } from "react";
import MenuBar from "../components/menuBar";
import Tabs from "../components/tabs";
import axios from "axios";
export default class Lectures extends React.Component {
  render() {
    if(this.props.lectures)
    {
    return (
      
      <div className="account" style={{ color: "#000" }}>
      
        <MenuBar title="Home" />
        <center>
          <Tabs lectureList={this.props.lectures.docs}/>
        </center>
      </div>
    );
    }
    else{
      return(
        <div>
          {console.log("lectures me lecture reaches",this.props.lectures)}
          <p>Please Login Again</p>
        </div>
        
      )
     
    }
  }
}
