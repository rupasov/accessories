import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import './App.css';
import { fetchProducts, changeColor } from '../actions';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative'
  },
  refresh: {
    display: 'inline-block',
    position: 'relative'
  }
};

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">accessories</h1>
        </header>
        <div style={{ margin: '40px 0', textAlign: 'center' }}>
          {!this.props.products ? (
            <RefreshIndicator
              size={50}
              left={0}
              top={0}
              loadingColor="#000"
              status="loading"
              style={style.refresh}
            />
          ) : (
            <Products
              products={this.props.products}
              selectedColors={this.props.selectedColors}
              changeColor={this.props.changeColor}
            />
          )}
        </div>
        <footer className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </footer>
      </div>
    );
  }
}

const mapStateToProps = ({ accessories }) => ({
  products: accessories.products,
  selectedColors: accessories.selectedColors
});

const mapDispatchToProps = {
  fetchProducts,
  changeColor
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
