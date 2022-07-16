import './InputCard.css'
import React, {  useState } from 'react'

// Rounded Radio
export const RoundedRadioInput = ({ changeCheckEvent, isChecked }) => {
  
  return (
    <div className={("radio_input_wrapper ")+(isChecked?"checked":"")} >
      <input   type="checkbox" name="" id=""  className='radio-input' onClick={() => changeCheckEvent()} />
      </div>
  ) 
  
}
export const CustomInput = ({ setTaskTitle }) => {
  return (
    <>
      <input type="text" name="" placeholder="input your text ... " id="" maxLength={20} className='task-text-input' onChange={(e) => setTaskTitle(e.target.value)} />
    </>
  )
}
export default function InputCard() {
  const [taskTitle, setTaskTitle] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const changeIsChecked = () => {
    setIsChecked(!isChecked);
  }

  const submitRequest = () => {
    // implementation
  }
  
  return (
    <div className="InputCard">
      <div className="radio-input-container">
          <RoundedRadioInput isChecked={isChecked} changeCheckEvent={changeIsChecked} />
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
