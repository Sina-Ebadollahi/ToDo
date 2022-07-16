import React, { useState } from 'react'
import './AuthField.css'
// w is 0 to 100
export default function AuthField({children, w, type}) {
    const [isComponentFocused, setIsComponentFocused ] = useState(false);
    const changeFocusOnComponent = (e) => {
        setIsComponentFocused(!isComponentFocused);
        }
  return (
    <div className={`auth-input-field ${isComponentFocused ? "auth-input-field-focus" : ""}`} style={{width: `${w}%`}}>
        <input onFocus={changeFocusOnComponent} onBlur={changeFocusOnComponent} type={type || "text"} placeholder={children} onChange={(e) => {}} />
    </div>
  )
}
