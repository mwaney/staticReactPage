import React from "react";
import ProfPic from "../images/angela.jpg";
export default function Top(){
    return (
    <div className="picsDiv">
        <img src={ProfPic} className="profilePic" alt="MyPic"/>
    </div>
    )
}