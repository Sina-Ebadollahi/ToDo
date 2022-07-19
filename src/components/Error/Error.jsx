import React from 'react'
import 'Error.css'
export default function Error({errorMessage, errorInfo}) {
  return (
    <div className="error-comp fc">
        {errorMessage && <div className="error-header"></div>}
        {errorInfo && <div className="error-info"></div>}
    </div>
  )
}
