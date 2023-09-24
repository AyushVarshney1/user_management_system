import React from "react";
import Wrapper from "../assets/wrappers/ProfilePopupWrapper";
import { BsPersonCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import { AiFillCloseSquare } from "react-icons/ai";

const ProfilePopup = ({ profileUser, handleClick }) => {
  return (
    <Wrapper>
      <div className = "profileHeader">
        <IconContext.Provider
          value={{ size: "7.5rem", color: "#D3D3D3", className: "profileIcon" }}
        >
          <BsPersonCircle />
          <IconContext.Provider
            value={{ size: "2.5rem", className: "close-icon" }}
          >
            <AiFillCloseSquare onClick = {handleClick} />
          </IconContext.Provider>
        </IconContext.Provider>
      </div>

      <div className="information">
        <div class="grid-item key">Name</div>
        <div class="grid-item value">{profileUser.name}</div>
        <div class="grid-item key">Email</div>
        <div class="grid-item value">{profileUser.email}</div>
        <div class="grid-item key">Age</div>
        <div class="grid-item value">{profileUser.age}</div>
        <div class="grid-item key">Gender</div>
        <div class="grid-item value">{profileUser.gender}</div>
        <div class="grid-item key">City</div>
        <div class="grid-item value">{profileUser.city}</div>
      </div>
    </Wrapper>
  );
};

export default ProfilePopup;
