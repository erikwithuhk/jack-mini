import React, { Component, PropTypes } from 'react';

const propTypes = {
  children: PropTypes.element.isRequired,
};

class Layout extends Component {
  render() {
    return (
      <div className="app-container">
        <header>This is the header</header>
        <main>{this.props.children}</main>
        <footer>This is the footer</footer>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

export default Layout;
