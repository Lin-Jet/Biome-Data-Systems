import React from "react";
import JetM from './images/BiomeDataTeamPics/Jet Mejia-Bohol.JPG';
import JesusE from './images/BiomeDataTeamPics/Jesus Estrada.JPG';
import Kumar from './images/BiomeDataTeamPics/Kumar.JPG';
import DarrenR from './images/BiomeDataTeamPics/Darren Roberson.JPG';
import CyrusA from './images/BiomeDataTeamPics/CyrusArellano.JPG';
import PeterK from './images/BiomeDataTeamPics/Peter Kinyanjui.JPG';
import JetL from './images/BiomeDataTeamPics/Jet Lin.JPG';
export default function Header(){
    return(
        <div className="about" id="aboutus">
            <h1 className="about-title">About Us</h1>
            <div className="mission">
                <h1>Mission Statement</h1>
                <p>Biome Data Systems is creating software for wearable medical IoT technology. We believe that all people should have equitable access to wearable technology that could potentially save lives and improve the health of millions.make you feel better as quickly as possible.</p>
            </div>
            <div className="card-grid">
                <div className="card">
                    <div className="card-header">
                        <img src={JetM} alt="Jet Mejia" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Jet Mejia</h1>
                        <h4>Chief Executive Officer</h4>
                        <p><i>Responsible for technology development, technological research, and technology affairs</i></p>
                    </div>
                </div>
                 
                <div className="card">
                    <div className="card-header">
                        <img src={JesusE} alt="Jesus Estrada" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Jesus Estrada</h1>
                        <h4>Director of Relations</h4>
                        <p><i>Responsible for application processing, consumer relations, consumer research, and internal affairs</i></p>
                    </div>
                </div>
                 
                <div className="card">
                    <div className="card-header">
                        <img src={Kumar} alt="Swapnil Kumar Sharma" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Swapnil Kumar Sharma</h1>
                        <h4>App and Software Developer</h4>
                        
                    </div>
                </div> 

                <div className="card">
                    <div className="card-header">
                        <img src={DarrenR} alt="Darren Roberson" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Darren Roberson</h1>
                        <h4>App and Software Developer</h4>
                        
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <img src={Kumar} alt="Swapnil Kumar Sharma" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Swapnil Kumar Sharma</h1>
                        <h4>App and Software Developer</h4>
                        
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                    <img src={CyrusA} alt="Cyrus Arellano" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Cyrus Arellano</h1>
                        <h4>App and Software Developer</h4>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <img src={PeterK} alt="Peter Kinyanjui" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Peter Kinyanjui</h1>
                        <h4>App and Software Developer</h4>
                        
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <img src={JetL} alt="Jet Lin" width="300rem"/>
                    </div>
                    <div className="card-body">
                        <h1>Jet Lin</h1>
                        <h4>Web Developer</h4>
                    </div>  
                </div>
            </div>
        </div>
    )
}