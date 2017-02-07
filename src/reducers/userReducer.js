const initialState = {
  currentUser: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER': {
      return { ...state, currentUser: action.payload };
    }
    case 'SIGN_OUT_USER': {
      return { ...state, currentUser: null };
    }
  }
  return state;
}
