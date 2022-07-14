import './InputCard.css'
import React, { useState } from 'react'

// Rounded Radio
export const RoundedRadioInput = ({ setIsChecked, isChecked }) => {
  return(
    <>
      <input type="checkbox" name="" id="" className='radio-input' onClick={() => setIsChecked(!isChecked)} />
    </>
  )
}
export const CustomInput = ({ setTaskTitle }) => {
  return (
    <>
      <input type="text" name="" id="" className='task-text-input' onChange={(e) => setTaskTitle(e.target.value)} />
    </>
  )
}
export default function InputCard() {
  const [taskTitle, setTaskTitle] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="InputCard">
      <div className="radio-input-container">
        <div className="input_wrapper">
          <RoundedRadioInput setIsChecked={setIsChecked} isChecked={isChecked} />
        </div>
      </div>
      <div className="text-input-container">
        <CustomInput setTaskTitle={setTaskTitle} />
      </div>
    </div>
  )
}
