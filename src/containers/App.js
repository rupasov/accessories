import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import logo from './logo.svg';
import './App.css';
import { fetchProducts } from '../actions';

class App extends Component {
  componentDidMount() {
    console.log('88888');
    console.log(this.props.fetchProducts());
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Products />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ accessories: { products } }) => ({
  products
});

const mapDispatchToProps = {
  fetchProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
