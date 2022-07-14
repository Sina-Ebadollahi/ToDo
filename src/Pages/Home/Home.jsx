import './Home.css'
import React from 'react'
import Frame from "../../components/Frame/Frame";
import InputCard from '../../components/Input/InputCard';
export default function Home() {
  return (
    <div className="HomeContainer">
        <div className="MountainContainer">
            <div className="MountainContainerCover"></div>
        </div>
        <div className="BlankDivContainer">
            <div>
                <Frame className={"input_frame"} shadow={1}><InputCard /></Frame>
                <Frame className={"body_frame"} shadow={1}>this is boy frame</Frame>
            </div>


        </div>
    </div>
  )
}
