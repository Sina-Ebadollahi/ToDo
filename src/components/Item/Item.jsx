import { useState } from 'react';
import { RoundedRadioInput } from '../Input/InputCard';
import React  from 'react';
import './Item.css'




export default function Item({ taskDetail, taskIsFinished, taskID, changeCurrentHoveredTask, currentHoveredTask }) {
    const changeCheckEvent = (taskNewValue) => {
        taskIsFinished= taskNewValue
    }
    
  return (
    <div key={taskID} className="item-container" onMouseEnter={() => changeCurrentHoveredTask(taskID)} onMouseLeave={() => changeCurrentHoveredTask(0)}>
        <RoundedRadioInput changeCheckEvent={changeCheckEvent} isChecked={taskIsFinished} />
        <div className="task-title-container">
            <h1 className={`title-header ${taskIsFinished ? ("task-done") : ("")}`} title={taskDetail}>{taskDetail}</h1>
        </div>
        {currentHoveredTask === taskID && (
            // div onClick deletes task
            <div className="delete-task-btn" onClick={(e) => {
                // delete task 
            }}>
                <div className="close"></div>
            </div>
        )}
    </div>
  )
}
