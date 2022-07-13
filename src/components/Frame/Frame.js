import "./style.css";
import React from "react";
export default function Frame(props) {
   return <div style={{width:props.w}} className={(props.className)+" Frame "+(props.shadow?"shadow ":"")}>
       {props.children}
   </div>
}