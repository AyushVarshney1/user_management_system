import {
  SETUP_USER_SUCCESS,
  EDIT_USER_SUCCESS,
  FETCH_USERS_SUCCESS,
  HANDLE_CHANGE,
  CHANGE_USERS_CHANGED,
  DELETE_USER_SUCCESS,
  DISPLAY_ALERT,
  CLOSE_ALERT,
  RESET_USER
} from "./actions.js";

const reducer = (state, action) => {
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      name: "",
      email: "",
      age: "",
      gender: "Gender",
      city: "",
    };
  }
  if (action.type === FETCH_USERS_SUCCESS) {
    return {
      ...state,
      users: action.payload,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === CHANGE_USERS_CHANGED) {
    return {
      ...state,
      usersChanged: !action.payload,
    };
  }
  if (action.type === DELETE_USER_SUCCESS) {
    return {
      ...state,
      users: state.users.filter((user) => {
        return user.id !== action.payload;
      }),
    };
  }
  if (action.type === EDIT_USER_SUCCESS) {
    return {
      ...state,
      users: state.users.map((user) => {
        if (user.id === action.payload) {
          return { ...user, ...state.currentUser }; 
        }
        return user;
      }),
      name: "",
      email: "",
      age: "",
      gender: "Gender",
      city: "",
    };
  }
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      displayAlertBoolean: true,
      alertText: action.payload
    };
  }
  if(action.type === CLOSE_ALERT){
    return {
      ...state,
      displayAlertBoolean: false,
      alertText: ""
    }
  }
  if(action.type === RESET_USER){
    return {
      ...state,
      name: "",
      email: "",
      age: "",
      gender: "Gender",
      city: "",
    }
  }
  return state;
};

export default reducer;
