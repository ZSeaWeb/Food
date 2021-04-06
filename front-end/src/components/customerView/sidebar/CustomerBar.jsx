import React from 'react';
import { Link } from "react-router-dom";
import {
    AppBar,
    Tabs,
    Tab
}
  from '@material-ui/core';

class CustomerBar extends React.Component {
  render() {
    return (
        <div>
          <br />
          <h3><b>ToolBar</b></h3>
          <br />
          <AppBar position="static">
            <Tabs value="value" onChange={() => {}} aria-label="simple tabs example" centered>
              <Link to={"/customer/home"} className="link">
                <Tab label="Home Page"/>
              </Link>
              <Link to={"/customer/cart"} className="link">
                  <Tab label="My Shopping Cart"/>
              </Link>
              <Link to={"/customer/orders"} className="link">
                  <Tab label="My Active Orders"/>
              </Link>
              <Link to={"/customer/history"} className="link">
                  <Tab label="My Order History"/>
              </Link>
            </Tabs>
          </AppBar>
        </div>
    );
  }
}

export default CustomerBar;