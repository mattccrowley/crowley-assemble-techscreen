import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

interface Product {
  sku: string;
  unitPrice: number;
  name: string;
  quantity: number;
}

interface Cart {
  selectedItems: Product[];
}

class ReviewCart extends Component {

}

class BillingShipping extends Component {

}

class OrderComplete extends Component {

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
      <div>

      </div>
    );
  }
}

export default App;
