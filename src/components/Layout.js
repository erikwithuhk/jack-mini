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
    const currentUser = this.props.user.currentUser;
    const header = currentUser !== null ? null : <LogoHeader />;
    const nav = currentUser !== null ? <Nav id={currentUser.id} /> : null;
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
