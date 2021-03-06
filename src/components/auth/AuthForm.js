import React, { Component, PropTypes } from 'react';
import { Link, browserHistory, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setUser } from '../../actions/userActions';
import { getPageTitle } from '../../lib/pageTitles';

const propTypes = {
  location: PropTypes.object.isRequired,
};

@connect((store) => {
  return {
    user: store.user,
  };
})

class AuthForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      office: '',
    };
  }
  additionalDetailsControl() {
    const { pathname } = this.props.location;
    if (pathname === '/signup') {
      return (
        <section className="user-form__additional-details">
          <label className="user-form__label" htmlFor="firstName">First name</label>
          <input
            className="user-form__input"
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={e => this.handleChange(e)}
          />
          <label className="user-form__label" htmlFor="lastName">Last name</label>
          <input
            className="user-form__input"
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={e => this.handleChange(e)}
          />
          <label className="user-form__label" htmlFor="office">Office</label>
          <input
            className="user-form__input"
            type="text"
            name="office"
            value={this.state.office}
            onChange={e => this.handleChange(e)}
          />
        </section>
      );
    }
    return null;
  }
  switchFormControl() {
    const { pathname } = this.props.location;
    let switchedPathname;
    let switchedText;
    switch (pathname) {
      case '/login':
        switchedPathname = '/signup';
        switchedText = 'sign up';
        break;
      case '/signup':
        switchedPathname = '/login';
        switchedText = 'log in';
        break;
      default:
        return null;
    }
    return (
      <Link to={switchedPathname} className="user-form__switch-link">Or {switchedText}</Link>
    );
  }
  handleChange(e) {
    const stateKey = e.target.name;
    const stateValue = e.target.value;
    const newState = {};
    newState[stateKey] = stateValue;
    this.setState(newState);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(setUser());
    browserHistory.push('/leaderboard');
  }
  render() {
    const { pathname } = this.props.location;
    const pageTitle = getPageTitle(pathname);
    return (
      <section className="user-form">
        <h1 className="user-form__header">{pageTitle}</h1>
        <form className="user-form__form" onSubmit={e => this.handleSubmit(e)}>
          <label className="user-form__label" htmlFor="email">Email</label>
          <input
            className="user-form__input"
            type="email"
            name="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
          {this.additionalDetailsControl()}
          <label className="user-form__label" htmlFor="password">Password</label>
          <input
            className="user-form__input"
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <button className="btn--primary">{pageTitle}</button>
        </form>
        {this.switchFormControl()}
      </section>
    );
  }
}

AuthForm.propTypes = propTypes;

export default withRouter(AuthForm);
