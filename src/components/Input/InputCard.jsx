import './InputCard.css'
import React, { useState } from 'react'

// Rounded Radio
export const RoundedRadioInput = ({ setIsChecked, isChecked }) => {
  return(
      <div className="radio_input_wrapper">
      <input type="checkbox" name="" id="" className='radio-input' onClick={() => setIsChecked(!isChecked)} />
      </div>
  )
}
export const CustomInput = ({ setTaskTitle }) => {
  return (
    <>
      <input type="text" name="" id="" maxLength={20} className='task-text-input' onChange={(e) => setTaskTitle(e.target.value)} />
    </>
  )
}
export default function InputCard() {
  const [taskTitle, setTaskTitle] = useState("");
  const [isChecked, setIsChecked] = useState(false);


  const submitRequest = () => {
    // implementation
  }
  
  return (
    <div className="InputCard">
      <div className="radio-input-container">
          <RoundedRadioInput setIsChecked={setIsChecked} isChecked={isChecked} />
      </div>
      <div className="text-input-container" onKeyDown={(e) => {
        if(e.key == "Enter"){
          submitRequest()
        }
      }}>
        <CustomInput setTaskTitle={setTaskTitle} />
      </div>

    </div>
  )
}
