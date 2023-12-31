import styled from "styled-components";

const Wrapper = styled.div`
  .submit-button {
    margin: 60px 0px 0px 41%;
    align-items: center;
    background-color: var(--secondaryColor);
    border: 0 solid #e2e8f0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    color: #1a202c;
    display: inline-flex;
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 700;
    height: 56px;
    justify-content: center;
    line-height: 24px;
    overflow-wrap: break-word;
    padding: 24px;
    text-decoration: none;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    transition: all 250ms;
  }

  .submit-button:hover {
    background: var(--secondaryColorDarker);
  }
`;

export default Wrapper;
