import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    height: 50px;
    width: 90%;
    grid-template-columns: 2fr 2fr 1fr 1fr 2fr 1fr;
    background-color: #E5E4E2;
    color: black;
    border-radius: 5px;
    margin-top: 10px;
    .formValues{
        overflow-x: hidden;
        max-width: 250px;
    }
    .actionIcon{
        cursor: pointer;
        transition: 0.2s;
    }

    .ml{
        margin-left: 10px;
    }

    .view{
        color: green;
    }
    .view:hover{
        color: darkgreen;
        transform: scale(1.10);
    }

    .edit{
        color: blue;
    }

    .edit:hover{
        color: darkblue;
        transform: scale(1.10);
    }

    .delete{
        color: red;
    }

    .delete:hover{
        color: darkred;
        transform: scale(1.10);
    }

`

export default Wrapper;