import { useReducer } from "react";

export default function AppData() {
  let defaultState = {
    authInfo: {
      isLoggedIn: false,
      todos: [],
      isUserEmailConfirmed: false,
    },
    userInfo: {
      fName: "",
      lName: "",
      email: "",
      password: "",
    },
  };
  const [state, dispatch] = useReducer((state = defaultState, action) => {
    switch (action.type) {
      case "LOG_IN":
        return {
          ...state,
          authInfo: action.payload,
        };
      case "SIGN_UP":
        return {
          ...state,
          userInfo: action.payload,
        };
      default:
        return state;
    }
  });
}
