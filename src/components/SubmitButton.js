import React from 'react'
import Wrapper from '../assets/wrappers/SubmitButtonWrapper'
const SubmitButton = ({ handleSubmit }) => {
  return (
    <Wrapper>
    <button className="submit-button" onClick = {handleSubmit} role="button">Submit</button>
    </Wrapper>
  )
}

export default SubmitButton