import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Products from '../components/Products';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import { fetchProducts, changeColor } from '../actions';
import './App.css';

const styles = {
  container: {
    margin: '40px 0',
    textAlign: 'center'
  }
};

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { products, selectedColors, changeColor } = this.props;
    return (
      <div className="App">
        <Header str="accessories" />
        <div style={styles.container}>
          {!products ? (
            <Loader />
          ) : (
            <Products
              products={products}
              selectedColors={selectedColors}
              changeColor={changeColor}
            />
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  products: PropTypes.array,
  selectedColors: PropTypes.object,
  fetchProducts: PropTypes.func,
  changeColor: PropTypes.func
};

const mapStateToProps = ({ accessories: { products, selectedColors } }) => ({
  products,
  selectedColors
});

const mapDispatchToProps = {
  fetchProducts,
  changeColor
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
