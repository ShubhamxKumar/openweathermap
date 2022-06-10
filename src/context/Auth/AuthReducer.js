import { LOADING, LOGIN } from "../types";

let reducer = (state, action) => {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: action.payload };
    }
    case LOGIN: {
      return { ...state, loading: false, logged: true, token: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
