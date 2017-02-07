import React, { Component } from 'react';
import { Link, browserHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { signOutUser } from '../../actions/userActions';

@connect((store) => {
  return {
    user: store.user,
  };
})

class UserDetail extends Component {
  handleSignout() {
    this.props.dispatch(signOutUser());
    browserHistory.push('/leaderboard');
  }
  render() {
    const currentUser = this.props.user.currentUser;
    const userDetails = Object.keys(currentUser).map((key) => {
      return <p key={key}>{key}: {currentUser[key]}</p>;
    });
    const logoutButton = currentUser.id === parseInt(this.props.params.id) ? <button className="btn--primary" onClick={() => this.handleSignout()}>Sign out</button> : null;
    return (
      <section className="user-detail">
        <h1>User Detail</h1>
        {userDetails}
        {logoutButton}
      </section>
    );
  }
}

export default withRouter(UserDetail);
