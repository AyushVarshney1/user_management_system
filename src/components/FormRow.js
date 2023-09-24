import React from "react";
import Wrapper from "../assets/wrappers/FormRowWrapper";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { IconContext } from "react-icons";

const FormRow = ({_id, name, email, age, gender, city, handleView, handleEdit, handleDelete}) => {
  return (
    <Wrapper>
      <div className = "formValues">{name}</div>
      <div className = "formValues">{email}</div>
      <div className = "formValues">{age}</div>
      <div className = "formValues">{gender}</div>
      <div className = "formValues">{city}</div>
      <div className = "formValues">
        <IconContext.Provider value={{ size: "1.5rem", className: "actionIcon view" }}>
          <AiOutlineEye onClick = {() => handleView(_id, name, email, age, gender, city)}/>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.5rem", className: "actionIcon ml edit" }}>
          <AiOutlineEdit onClick = {() => handleEdit(_id, name, email, age, gender, city)}/>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.5rem", className: "actionIcon ml delete" }}>
          <AiOutlineDelete onClick = {() => handleDelete(_id)}/>
        </IconContext.Provider>
      </div>
    </Wrapper>
  );
};

export default FormRow;
