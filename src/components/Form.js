import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/FormContainerWrapper";
import NewButton from "./NewButton";
import FormConstraints from "./FormConstraints";
import FormRow from "./FormRow";
import Popup from "./Popup";
import ProfilePopup from "./ProfilePopup";
import { useAppContext } from "../context/appContext";
const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showViewForm, setShowViewForm] = useState(false);
  const [editID, setEditID] = useState(null);
  const [profileUser, setProfileUser] = useState(null);
  const { fetchUsers, users, usersChanged, changeUsersChanged, deleteUser, handleChange, setupUser, name, email, age, gender, city, editUser, displayAlert, resetUser} = useAppContext();
  const handleClick = async () => {
    setShowForm(!showForm);
  };

  const profileHandleClick = () => {
    setShowViewForm(!showViewForm);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, age, gender, city);
    if (name && email && age && gender && city) {
      const currentUser = {
        name,
        email,
        age,
        gender,
        city,
      };
      setupUser({currentUser});
      handleClick();
    }
    else{
      displayAlert({text: "Please Provide All Values"})
    }
  };

  const handleEditClick = () => {
    setShowEditForm(!showEditForm);
    setTimeout(() => {
      resetUser();
    }, 0);
  }

  const handleEditClickSubmit = (e) => {
    setShowEditForm(!showEditForm);
  }


  const handleView = (_id, name, email, age, gender, city) =>{
    setShowViewForm(true);
    setProfileUser({_id, name, email, age, gender, city});
  }

  const handleEdit = (_id, name, email, age, gender, city) =>{
    setShowEditForm(true);
    handleChange({name: "name", value: name});
    handleChange({name: "email", value:email});
    handleChange({name: "age", value: age});
    handleChange({name: "gender", value: gender});
    handleChange({name: "city", value: city});
    setEditID(_id);
  }

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, age, gender, city);
    if (name && email && age && gender && city) {
      const currentUser = {
        name,
        email,
        age,
        gender,
        city,
      };
      editUser({currentUser, _id: editID});
      handleEditClickSubmit();
    }
    else{
      displayAlert({text: "Please Provide All Values"})
    }
  };

  const handleDelete = (_id) =>{
    deleteUser({ _id });
  }

  useEffect(() => {
    if(usersChanged){
    fetchUsers();
    changeUsersChanged();
    }
    else{
      fetchUsers();
    }
  }, [usersChanged]);

  return (
    <Wrapper>
      <div className="form">
        <h2>User Information Management System</h2>
        <NewButton handleClick={handleClick} />
        <FormConstraints />
        { users.length > 0 ? (users.map((user) => {
          return (
            <FormRow
              _id={user.id}
              name={user.name}
              email={user.email}
              age={user.age}
              gender={user.gender}
              city={user.city}
              handleView={handleView}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })) : <p className="no-tasks">No Users</p>}
      </div>
      {showForm && <div className="grey-bg"></div>}
      {showForm && <Popup header = "Fill User Information" handleClick={handleClick} handleSubmit = {handleSubmit}/>}
      {showEditForm && <div className="grey-bg"></div>}
      {showEditForm && <Popup header = "Edit User Information" handleClick={handleEditClick} handleSubmit= {handleEditSubmit} />}
      {showViewForm && <div className="grey-bg"></div>}
      {showViewForm && <ProfilePopup handleClick = {profileHandleClick} profileUser={profileUser} />}
    </Wrapper>
  );
};

export default Form;
