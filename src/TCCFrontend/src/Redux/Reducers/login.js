const INITIAL_STATE = {
  isAuthenticated: false,
  username: "",
  email: "",
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        ...action.payload,
      };
    case "LOGOUT":
      return {
        ...INITIAL_STATE,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
