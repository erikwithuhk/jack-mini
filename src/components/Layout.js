import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Nav from './Nav';

const propTypes = {
  children: PropTypes.element.isRequired,
};

class Layout extends Component {
  render() {
    const { pathname } = this.props.location;
    // const nav = pathname === '/' ? null : <Nav />;
    return (
      <div className="app-container">
        <Header />
        {pathname !== '/' && <Nav />}
        <main>{this.props.children}</main>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

export default Layout;
