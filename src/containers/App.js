import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
//import logo from './logo.svg';
import './App.css';
import { fetchProducts } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">accessories</h1>
        </header>
        <div style={{ margin: '40px 0' }}>
          {this.props.products && <Products products={this.props.products} />}
        </div>
        <footer className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </footer>
      </div>
    );
  }
}

const mapStateToProps = ({ accessories }) => ({
  products: accessories.products
});

const mapDispatchToProps = {
  fetchProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
