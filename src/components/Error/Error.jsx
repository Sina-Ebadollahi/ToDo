import React from 'react'
import './Error.css'
export default function Error({errorMessage, errorInfo}) {
  return (
    <div className="error-comp fc">
        {errorMessage && errorMessage != "" && <div className="error-header">{errorMessage}</div>}
        {errorInfo && errorInfo != ""  && <div className="error-info">{errorInfo}</div>}
    </div>
  )
}
