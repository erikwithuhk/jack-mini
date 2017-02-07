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
    const header = this.props.user.currentUser ? null : <LogoHeader />;
    const nav = this.props.user.currentUser ? <Nav /> : null;
    return (
      <div className="app-container">
        {header}
        {nav}
        <main>{this.props.children}</main>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

export default Layout;
