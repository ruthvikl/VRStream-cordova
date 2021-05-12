import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";


export default class MenuBar extends React.Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.setLectures(null);
  };
  render() {
    return (
      <div>
        <AppBar
          position="static"
          style={{
            backgroundImage: "linear-gradient(180deg, #01ab98, #59b860)",
          }}
        >
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">{this.props.title}</Typography>
            <IconButton color="inherit">
              <ExitToAppIcon onClick={this.handleLogout} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
