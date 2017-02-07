import store from '../store';

const requireAuth = (nextState, replace) => {
  const currentState = store.getState();
  if (currentState.user.currentUser === null) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

export default requireAuth;
