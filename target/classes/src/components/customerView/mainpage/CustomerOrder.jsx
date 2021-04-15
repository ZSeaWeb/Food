import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import OrderCard from "../../card/OrderCard";
const axios = require('axios').default;

class CustomerOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: undefined
    }
    this.getActiveOrders = this.getActiveOrders.bind(this);
  }

  componentDidMount() {
    this.getActiveOrders();
  }

  getActiveOrders() {
    axios.get("/api/customer/myActiveOrders/" + this.props.currentUser.id).then(
      response => {
        this.setState({orders: response.data});
      }
    ).catch(err => console.log(err));
  }

  render() {
    return this.props.currentUser && this.state.orders ? (
      <div>
        <Grid container justify="space-evenly" spacing={3}>
          {this.state.orders.length > 0 ? this.state.orders.map(order => (
            <Grid item key={order.id} xs={5}>
              <OrderCard order={order} userType={this.props.currentUser.type} getOrders={this.getActiveOrders} />
            </Grid>
          )) : <Typography variant="h5" color="textSecondary">No active orders now</Typography>}
        </Grid>
      </div>
    ) : <div />
  }
}

export default CustomerOrder;