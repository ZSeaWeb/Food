import React from "react";
import {Link, withRouter} from "react-router-dom";
import './Home.css'
import {
  AppBar,
  Tabs,
  Tab
} from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

class Home extends React.Component {
  render() {
    return (
        <div class="container">

          <div className="text-part">
            <h2>
              🍔 🍦 You are in the right place to find delicious food! 🍕 🥤
            </h2>
          </div>

          <div>
            <div className="container">
              <div className="image-part">
                <div class="row align-items-center">
                  <img
                      className="home-image"
                      src="https://caspiannews.com/media/caspian_news/all_original_photos/1528831479_7183783_1528831390_5761793SFF-Foto-2018-001web2.jpg"
                      alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="text-part">
              <h2>There are ... restaurants in our website!</h2>
            </div>
            <div className="text-part">
              <h2>The most popular restaurant in the past 24 hours is ...</h2>
            </div>
            <div>
              <AppBar position="static" style={{background: '#f6e6e4'}}>
                <Tabs value="value" onChange={() => {
                }} aria-label="simple tabs example" centered>
                  <Link to={"/login"} className="link" color="secondary">
                    <Tab label="Login" icon={<AccountBoxIcon/>}/>
                  </Link>
                </Tabs>
              </AppBar>
            </div>
          </div>
        </div>
    )
  }
}

export default Home;