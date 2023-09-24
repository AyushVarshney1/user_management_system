import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgb(248, 248, 248);
  position: relative;
  top: 25%;
  height: 49%;
  width: 50%;
  z-index: 10;
  position: fixed;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .popup-header {
    display: grid;
    grid-template-columns: 50fr 1fr;
    place-items: center;
  }

  .popup-heading {
    font-size: 24px;
    margin-left: 35px;
  }

  .close-icon {
    color: #ee4b2b;
    cursor: pointer;
  }

  .close-icon:hover {
    color: #d70040;
  }

  .popup-form {
    margin-top: 30px;
  }

  .row {
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  input[type="text"],
  input[type="email"],
  input[type="number"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="text"]:valid,
  input[type="email"]:valid,
  input[type="number"]:valid,
  select:valid {
    background-color: white;
    color: black;
  }

  .first > input {
    width: 300px;
  }

  .second > select {
    margin-top: 30px;
    width: 200px;
  }

  .second > input {
    margin-top: 30px;
    width: 200px;
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  input[type="number"]:focus,
  select:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  input::placeholder,
  select::placeholder {
    color: #888;
  }

  select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    appearance: none; 
    background-size: 20px;
  }

  select:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  select option {
    background-color: #fff;
    color: #333;
  }

  .select-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .select-wrapper::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #007bff;
  }
`;

export default Wrapper;
