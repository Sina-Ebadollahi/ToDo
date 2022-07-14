import './InputCard.css'
import React from 'react'

// Rounded Radio
export const RoundedRadioInput = () => {
  return(
    <>
      <input type="checkbox" name="" id="" className='radio_input' />
    </>
  )
}
export default function InputCard() {
  return (
    <div className="InputCard">
      <div className="radio_input_container">
        <div className="input_wrapper">
          <RoundedRadioInput />
        </div>
      </div>
      <div className="text_input_container"></div>
    </div>
  )
}
