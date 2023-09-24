import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .form {
    margin: 50px 0px 100px 0px;
    background-color: white;
    width: 85%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    padding-bottom: 80px;
  }

  h2 {
    font-size: 22px;
    font-weight: 400;
  }

  .grey-bg {
    z-index: 1;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(51,51,51,0.5);
  }

  .no-tasks{
  color: #aaa;
  font-weight: 500;
  font-size: 24px;
}
`;

export default Wrapper;
