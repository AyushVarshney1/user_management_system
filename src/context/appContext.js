import React, { useState, useReducer, useContext } from "react";
import axios from "axios";
import reducer from "./reducer.js";
import {
  SETUP_USER_SUCCESS,
  FETCH_USERS_SUCCESS,
  DISPLAY_ALERT,
  CLOSE_ALERT,
  HANDLE_CHANGE,
  CHANGE_USERS_CHANGED,
  DELETE_USER_SUCCESS,
  EDIT_USER_SUCCESS,
  RESET_USER
} from "./actions.js";

let initialState = {
  users: [],
  name: "",
  email: "",
  age: "",
  gender: "Gender",
  city: "",
  usersChanged: false,
  displayAlertBoolean: false,
  alertText: "",
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setupUser = async ({ currentUser }) => {
    try {
      const url = "https://userinformationmanagemen-2d511-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";
      const res = await axios.post(url, currentUser);
      dispatch({ type: SETUP_USER_SUCCESS });
      state.usersChanged = true;
    } catch (error) {
      alert("Something went wrong!");
    }
  }

  const editUser = async ({ currentUser, _id }) => {
    console.log(currentUser);
    const url = `https://userinformationmanagemen-2d511-default-rtdb.asia-southeast1.firebasedatabase.app/users/${_id}.json`;
    try {
      await axios.patch(url, currentUser);
      dispatch({ type: EDIT_USER_SUCCESS, payload: _id });
      state.usersChanged = true;
    } catch (error) {
      console.log(error);
    }
  }

  const deleteUser = async ({ _id }) => {
    const url = `https://userinformationmanagemen-2d511-default-rtdb.asia-southeast1.firebasedatabase.app/users/${_id}.json`;
    try {
      await axios.delete(url);
      dispatch({ type: DELETE_USER_SUCCESS, payload: _id });
      state.usersChanged = true;
    } catch (error) {
      alert("Something went wrong!");
    }
  }

  const fetchUsers = async () => {
    const url = "https://userinformationmanagemen-2d511-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";
    try {
      const res = await axios.get(url);
      const users = [];
      for (const key in res.data) {
        const user = {
          id: key,
          name: res.data[key].name,
          email: res.data[key].email,
          age: res.data[key].age,
          gender: res.data[key].gender,
          city: res.data[key].city,
        };
        users.push(user);
      }
      dispatch({ type: FETCH_USERS_SUCCESS, payload: users });
    } catch (error) {
      alert("Something went wrong!");
    }
  }

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const changeUsersChanged = () => {
    dispatch({ type: CHANGE_USERS_CHANGED, payload: state.usersChanged });
  }

  const displayAlert = ({text}) => {
    dispatch({ type: DISPLAY_ALERT, payload: text });
    setTimeout(() => {
      closeAlert();
    },1500)
  }

  const closeAlert = () => {
    dispatch({ type: CLOSE_ALERT });
  }

  const resetUser = () => {
    dispatch({ type: RESET_USER });

  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChange,
        setupUser,
        fetchUsers,
        changeUsersChanged,
        deleteUser,
        editUser,
        displayAlert,
        closeAlert,
        resetUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
