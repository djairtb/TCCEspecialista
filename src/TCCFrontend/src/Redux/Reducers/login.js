const INITIAL_STATE = {
  isAuthenticasted: false,
  username: "",
  email: "",
};

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticasted: true,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default todos;
