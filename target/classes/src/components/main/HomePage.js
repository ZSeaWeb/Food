import React, {useEffect, useState} from 'react';
import TopBar from '../topbar/Topbar';
import './HomePage.css'
import {Link} from "react-router-dom";
import {
    AppBar,
    Tabs,
    Tab
} from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AdbIcon from '@material-ui/icons/Adb';


const HomePage = () => {
    const [restaurants, setRestaurants] = useState([])
    // useEffect(()=> {
    //     // fetch("/api/restaurant/all").then(
    //     //     restaurants => {
    //     //         //let temp = response.data.filter(restaurant => restaurant.information != null && restaurant.menu != null);
    //     //         //this.setState({searchText: "", restaurants: temp});
    //     //         setRestaurants(restaurants)
    //     //     }
    //     // ).catch(err => console.log(err));
    // })

    useEffect(() => {
        fetch("http://localhost:8080/api/restaurant/all")
            .then(response => response.json())
            .then((response) => {
                setRestaurants(response)
                console.log(restaurants)
            })
    }, [])

    return (
        <div className="container">
            <div className="text-part">
                <h2>
                    🍔 🍦 You are in the right place to find delicious food! 🍕 🥤
                </h2>
            </div>

            <div>
                <div className="container">
                    <div className="image-part">
                        <div className="row align-items-center">
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
                    <h2>There are {restaurants.length} restaurants in our website!</h2>
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

                            <Link to={"/register"} className="link" color="secondary">
                                <Tab label="Register" icon={<AdbIcon/>}/>
                            </Link>
                        </Tabs>
                    </AppBar>
                </div>
            </div>


            {/*<Link to={`/login`}>*/}
            {/*<button>login</button>*/}
            {/*</Link>*/}

            {/*<h1>There are ${restaurants.length} restaurants</h1>*/}
        </div>
    )

}

export default HomePage
