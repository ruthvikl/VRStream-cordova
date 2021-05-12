import './App.css';
import { BrowserRouter as Router, Redirect,Switch, Route } from "react-router-dom";
import Lectures from "./pages/lectures";
import Login from './pages/login'
import SignUp from './pages/signUp'
import React from 'react';
import axios from 'axios';
export default class App extends React.Component {
  state={};
  componentDidMount() {
    axios.get("lectures").then(
      (res) => {
        console.log('componentdidmount')
        console.log(res.data,'res daata in  lecures')
        this.setLectures(res.data)
      },
      (err) => {
        console.log(err);
      }
    );
  }

  setLectures = lectures =>{
    this.setState({
      lectures:lectures
    })
    console.log('setstate',lectures)

  }
  render(){

  
  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login setLectures={this.setLectures} />
        </Route>
        <Route path="/lectures">
          <Lectures lectures={this.state.lectures} setLectures={this.setLectures}/>
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/">
        <Redirect to="/login"/>
        </Route>
      </Switch>
    </div>
  );
}
}