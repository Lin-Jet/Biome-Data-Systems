import React from "react";
import watch from './images/BDSpictures/th.jpg';

export default function ComingSoon(){
    return(
        <div className="coming-soon">
            <h1 className="coming-soon-main">Coming Soon</h1>
            <h3 className="coming-soon-sub">Biome App x Watch</h3>
            <div className="spinner"></div>
            <img src={watch} className="coming-soon-watch"/>
        </div>
    )
}