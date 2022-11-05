import React from "react";
import HeaderPic from './images/BDSpictures/app-icon-crop.png';

export default function Header(){
    return(
        <div className="header">
            <img src={HeaderPic} width="500rem"alt="Biome Data Systems Header Picture" />
        </div>
    )
}