import React, { useState } from "react";
import Wrapper from "../assets/wrappers/NewButtonWrapper";
import { AiOutlinePlus } from "react-icons/ai";
import { IconContext } from "react-icons";


const NewButton = ({handleClick}) => {
  return (
    <Wrapper onClick = {handleClick}>
      <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
        <AiOutlinePlus />
      </IconContext.Provider>
      New Record
    </Wrapper>
  );
};

export default NewButton;
