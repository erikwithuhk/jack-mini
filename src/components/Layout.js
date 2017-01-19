import React, { Component, PropTypes } from 'react';
import Header from './Header';

const propTypes = {
  children: PropTypes.element.isRequired,
};

class Layout extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <main>{this.props.children}</main>
        <footer>This is the footer</footer>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

export default Layout;
