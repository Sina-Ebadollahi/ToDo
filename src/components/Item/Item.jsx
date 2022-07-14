import { useState } from 'react';
import { RoundedRadioInput } from '../Input/InputCard';
import './Item.css'




export default function Item(props) {
    const { taskDetail, taskIsFinished, taskID } = props;
    const [isThisItemHovered, setIsThisItemHovered] = useState(false);
  return (
    <div key={taskID} className="item-container" onMouseEnter={() => setIsThisItemHovered(true)} onMouseLeave={() => setIsThisItemHovered(false)}>
        <RoundedRadioInput isChecked={taskIsFinished} />
        <div className="task-title-container">
            <h1 className="title-header" title={taskDetail}>{taskDetail}</h1>
        </div>
        {isThisItemHovered && (
            // div onClick deletes task
            <div className="delete-task-btn" onClick={(e) => {}}>
                <div className="close"></div>
            </div>
        )}
    </div>
  )
}
