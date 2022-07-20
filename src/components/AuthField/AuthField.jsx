import React, { useRef, useState } from 'react'
import './AuthField.css'
// w is 0 to 100
export default function AuthField({children, changeValue , w, type}) {
  const inpRef = useRef(null);
    const [isComponentFocused, setIsComponentFocused ] = useState(false);
    const changeFocusOnComponent = (e) => {
        setIsComponentFocused(!isComponentFocused);
        }
  return (
    <div onChange={(e) => {
      changeValue(inpRef.current.value)
    }} className={`auth-input-field ${isComponentFocused ? "auth-input-field-focus" : ""}`} style={{width: `${w}%`}}>
        <input ref={inpRef} onFocus={changeFocusOnComponent} onBlur={changeFocusOnComponent}  type={type || "text"} placeholder={children} onChange={(e) => {}} />
    </div>
  )
}
