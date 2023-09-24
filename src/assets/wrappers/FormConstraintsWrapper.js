import styled from "styled-components";

const Wrapper = styled.div`
    background-color: var(--primaryColor);
    display: grid;
    place-items: center;
    height: 50px;
    width: 90%;
    grid-template-columns: 2fr 2fr 1fr 1fr 2fr 1fr;
    color: white;
    font-weight: 400;
    margin: 55px 0px 10px 0px;
    border-radius: 10px;
    font-size: 18px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 5px;

`

export default Wrapper;