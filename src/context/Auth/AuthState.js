import { useReducer } from "react";
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";
import axios from "axios";
import { LOADING, LOGIN } from "../types";

const AuthState = (props) => {
  const initialState = {
    loading: false,
    logged: false,
    token: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const setLoading = (value) => {
    dispatch({ type: LOADING, payload: value });
  };

  const login = async (credentials, callback = null) => {
    try {
      setLoading(true);
      const res = await axios.post("https://reqres.in/api/login", {
        email: credentials.email,
        password: credentials.password,
      });
      if (res.data.token) {
        dispatch({ type: LOGIN, payload: res.data.token });
        if (callback) {
          callback("SUCCESS", "Login Successful");
        }
      }
      setLoading(false);
    } catch (err) {
      if (callback) {
        if (callback) {
          callback("ERROR", err.response.data.error);
        }
      }
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        laoding: state.loading,
        logged: state.logged,
        token: state.token,
        login,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
