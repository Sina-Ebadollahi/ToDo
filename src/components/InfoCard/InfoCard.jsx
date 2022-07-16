import React from 'react'
import './InfoCard.css'
export default function InfoCard({children, changeShowState}) {
  return (
    <div className="info-card-container fc">
        <div className="close-icon-wrapper fc">
            <div onClick={() => changeShowState()} className="closeButton"></div>
        </div>
        <div className="infocard-children fc">
            {children}
        </div>
    </div>
  )
}
