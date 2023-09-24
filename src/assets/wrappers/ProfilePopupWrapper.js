import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgb(248, 248, 248);
  position: relative;
  top: 12%;
  height: 75%;
  width: 37%;
  z-index: 10;
  position: fixed;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .profileHeader {
    display: grid;
    grid-template-columns: 25fr 1fr;
  }

  .profileIcon {
    margin: 20px 0px 0px 225px;
  }

  .close-icon {
    color: #ee4b2b;
    cursor: pointer;
  }

  .close-icon:hover {
    color: #d70040;
  }

  .information {
    margin-top: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr; 
    grid-template-rows: repeat(5, 1fr); 
    gap: 10px; 
  }

  .grid-item {
    padding: 10px;
    text-align: center;
  }

  .key {
    color: black;
    font-weight: 500;
    font-size: 20px;
  }

  .value{
    color: darkgray;
    overflow-x: hidden ;
    font-size: 20px;
  }
`;

export default Wrapper;
