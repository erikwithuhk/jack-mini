const initialState = {
  currentUser: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER': {
      return { ...state, currentUser: action.payload };
    }
  }
  return state;
}
