import React, { useState } from "react";
import Wrapper from "../assets/wrappers/PopupWrapper";
import { AiFillCloseSquare } from "react-icons/ai";
import { IconContext } from "react-icons";
import SubmitButton from "./SubmitButton";
import { useAppContext } from "../context/appContext";
import Alert from "./Alert";

const Popup = ({ handleClick, header, handleSubmit }) => {
  const { setupUser, handleChange, name, email, age, gender, city, displayAlertBoolean, alertText } =
    useAppContext();

  const handleInfoChange = (e) => {
    handleChange({
      name: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <Wrapper>
      <div className="popup-header">
        <div className="popup-heading">{header}</div>
        <IconContext.Provider
          value={{ size: "2.5rem", className: "close-icon" }}
        >
          <AiFillCloseSquare onClick={handleClick} />
        </IconContext.Provider>
      </div>
      <div className="popup-form">
        <div className="row first">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleInfoChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleInfoChange}
          />
        </div>
        <div className="row second">
          <input
            type="number"
            placeholder="Age"
            name="age"
            value={age}
            onChange={handleInfoChange}
          />
          <select
            id="gender"
            placeholder="Gender"
            name="gender"
            value={gender}
            onChange={handleInfoChange}
          >
            <option
              className="option-disabled-value"
              disabled
              selected
              hidden
              value="Gender"
            >
              Gender
            </option>
            <option className="option-value" value="Male">
              Male
            </option>
            <option className="option-value" value="Female">
              Female
            </option>
            <option className="option-value" value="Other">
              Other
            </option>
          </select>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={city}
            onChange={handleInfoChange}
          />
        </div>
        <SubmitButton handleSubmit={handleSubmit} />
      </div>
      {displayAlertBoolean && <Alert text = {alertText}/> }
    </Wrapper>
  );
};

export default Popup;
