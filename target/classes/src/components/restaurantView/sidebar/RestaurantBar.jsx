import React from 'react';
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Divider, AppBar, Tabs, Tab
}
  from '@material-ui/core';
import {TabPanel, TabContext} from "@material-ui/lab";

class RestaurantBar extends React.Component {
  render() {
    return (
      <div>
        <br />
        <h3><b><i>Restaurant ToolBar</i></b></h3>
        <br />
        <AppBar position="static">
          <Tabs value="value" onChange={() => {}} aria-label="simple tabs example" centered>
            <Link to={"/restaurant/home"} className="link">
              <Tab label="New Restaurant Instruction"/>
            </Link>
            <Link to={"/restaurant/information"} className="link">
              <Tab label="Restaurant Information" />
            </Link>
            <Link to={"/restaurant/menu"} className="link">
              <Tab label="Menu"/>
            </Link>
            <Link to={"/restaurant/order"} className="link">
              <Tab label="My Active Orders"/>
            </Link>
            <Link to={"/restaurant/history"} className="link">
              <Tab label="My Order History"/>
            </Link>
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default RestaurantBar;