import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--primaryColor);
  border: 2px solid var(--primaryColor);
  border-radius: 5px;
  box-shadow: var(--secondaryColorDarker) 4px 4px 0 0;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 150px;

  &:active {
    box-shadow: var(--secondaryColorDarker) 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
`;

export default Wrapper;
