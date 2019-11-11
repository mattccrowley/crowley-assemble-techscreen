import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

interface Product {
  imagePath: string;
  sku: number;
  unitPrice: number;
  name: string;
  quantity: number;
}

interface Cart {
  selectedItems: Product[];
}

class ReviewCart extends Component<Cart, {}> {
  render() {
    let cartItems = this.props.selectedItems.map((cartItem) => 
        <tr>
          <th><img src={cartItem.imagePath}></img></th>
          <th>{cartItem.name}<br />{cartItem.sku}</th>
          <th>{cartItem.quantity}</th>
          <th>${cartItem.unitPrice}</th>
        </tr>
      );

    let cartTotal: number = 0;
    for (let i = 0; i < this.props.selectedItems.length; i++) {
      cartTotal += this.props.selectedItems[i].unitPrice;
    }

    return (
      <div>
        <tr>
          <th>Your Cart</th>
          <th></th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {cartItems}
        <tr>
          <th></th>
          <th></th>
          <th>Subtotal</th>
          <th>${cartTotal}</th>
        </tr>
        <Link to="/billing">
            <button type="button">Check Out</button>
        </Link>
      </div>
    );
  }
}

class BillingShipping extends Component {
  render() {
    return (
      <div>
        <h3>Check Out</h3>
        <form>
          <div>
            <h4>Payment Information</h4>
            Name on Card <input type="text" /><br />
            Card Number <input type="text" /><br />
            Expiration Date 
            <select>
              <option value="January">01</option>
              <option value="Febuary">02</option>
              <option value="March">03</option>
              <option value="April">04</option>
              <option value="May">05</option>
              <option value="June">06</option>
              <option value="July">07</option>
              <option value="August">08</option>
              <option value="September">09</option>
              <option value="October">10</option>
              <option value="November">11</option>
              <option value="December">12</option>
            </select>
            <select>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
            </select><br />
            CVV <input type="text" /><br />
          </div>
          <div>
            <h4>Shipping Address</h4>
            Name <input type="text" /><br />
            Address <input type="text" /><br />
            Apt/suite/etc <input type="text" /><br />
            City <input type="text" /><br />
            Country 
            <select>
              <option>United States</option>
            </select><br />
            State 
            <select>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>><br />
            ZIP Code <input type="text" /><br />>
            <input type="radio" /> Billing address same as shipping
          </div>
          <Link to="/orderComplete">
            <button type="submit">Place Order</button>
          </Link>
        </form>
      </div>
    );
  }
}

class OrderComplete extends Component {
  render() {
    return (
      <div>
        <h3>Order Complete</h3> <br />
        <h5>Hooray! Way to order those products.</h5><br />
        <Link to="/">
            <button type="button">Go Home</button>
        </Link>
      </div>
    );
  }
}

class App extends Component<{}, Cart> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedItems: []
    }
  }

  render() {
    return (
      <Router>
        <div>
          <header>
            <h2>Assemble Store</h2>
          </header>
          <Switch>
            <Route exact path="/" >
              <ReviewCart selectedItems={[{ imagePath: "./red-shirt.png", sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2 }, { imagePath: "./blue-shirt.png", sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1 }, { imagePath: "./blue-socks.png", sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4 }]} />
            </Route>
            <Route path="/billing" component={BillingShipping} exact />
            <Route path="/orderComplete" component={OrderComplete} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
