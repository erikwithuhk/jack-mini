import React, { Component, PropTypes } from 'react';
import Nav from './Nav';

const propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
};

class Layout extends Component {
  render() {
    const { pathname } = this.props.location;
    const pathnamesWithoutNav = ['/', '/signup', '/login'];
    return (
      <div className="app-container">
        {!pathnamesWithoutNav.includes(pathname) && <Nav />}
        <main>{this.props.children}</main>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

export default Layout;
