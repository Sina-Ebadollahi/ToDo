import { RoundedRadioInput } from '../Input/InputCard';
import './Item.css'




export const 
export default function Item(props) {
    const { taskDetail, taskIsFinished } = props;
  return (
    <div className="item-container">
        <RoundedRadioInput isChecked={taskIsFinished} />
        <div className="task-title-container">
            <h1 className="title-header">{taskDetail}</h1>
        </div>
    </div>
  )
}
