import React from 'react';
import './RestaurantBar.css'
import { Link } from "react-router-dom";
import {
  AppBar, Tabs, Tab
}
  from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HelpIcon from '@material-ui/icons/Help';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import RestaurantIcon from '@material-ui/icons/Restaurant';

class RestaurantBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static" style={{ background: '#2E3B55' }}>
          <Tabs value="value" onChange={() => {}} aria-label="simple tabs example" centered>
            <Link to={"/restaurant/home"} className="link">
              <Tab label="New Restaurant" icon={<HelpIcon />}/>
            </Link>
            <Link to={"/restaurant/information"} className="link">
              <Tab label="Restaurant Information" icon={<RestaurantIcon />}/>
            </Link>
            <Link to={"/restaurant/menu"} className="link">
              <Tab label="Menu" icon={<MenuBookIcon />}/>
            </Link>
            <Link to={"/restaurant/order"} className="link">
              <Tab label="My Active Orders" icon={<FavoriteIcon />}/>
            </Link>
            <Link to={"/restaurant/history"} className="link">
              <Tab label="My Order History" icon={<AddAlarmIcon />}/>
            </Link>
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default RestaurantBar;