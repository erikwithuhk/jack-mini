import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    user: store.user,
  };
})

class UserDetail extends Component {
  render() {
    return (
      <h1>User Detail</h1>
    );
  }
}

export default UserDetail;
