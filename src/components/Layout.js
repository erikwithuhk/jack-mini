import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LogoHeader from './headers/logoHeader';
import Nav from './Nav';

const propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
};

@connect((store) => {
  return {
    user: store.user,
  };
})

class Layout extends Component {
  render() {
    const { pathname } = this.props.location;
    const pathnamesWithoutNav = ['/', '/signup', '/login'];
    return (
      <div className="app-container">
        <LogoHeader />
        {!pathnamesWithoutNav.includes(pathname) && <Nav />}
        <main>{this.props.children}</main>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

export default Layout;
