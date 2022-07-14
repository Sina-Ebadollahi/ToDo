import './Home.css'
import React, { useState } from 'react'
import Frame from "../../components/Frame/Frame";
import InputCard from '../../components/Input/InputCard';
import Item from '../../components/Item/Item';
export default function Home() {
  const [currentHoveredTask, setCurrentHoveredTask] = useState(0);
  const changeCurrentHoveredTask = (newID) => {
    setCurrentHoveredTask(newID);
  }
  return (
    <div className="HomeContainer">
        <div className="MountainContainer">
            <div className="MountainContainerCover"></div>
        </div>
        <div className="BlankDivContainer">
            <div>
                <Frame className={"input_frame"} shadow={1}>
                  <InputCard />
                  </Frame>
                <Frame className={"body_frame"} shadow={1}>{
                  // map on array of datas with Item component for each one
                   
                }</Frame>
            </div>


        </div>
    </div>
  )
}
