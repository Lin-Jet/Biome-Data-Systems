import React from "react";
import Navbar from "./Navbar";

export default function Footer(){
    return(
        <div className="footer">
            <ul className="footer-items">
                <li><a href="#home">Home</a></li>
                <li><a href="https://www.linkedin.com/company/biome-data-systems/" target="_blank">LinkedIn</a></li>
                <li><a href="tel:951-450-1399">Call Us</a></li>
                <li><a href = "mailto: advancement@biomedatasystems.com">Email Us</a></li>
            </ul>
        </div>
    )
}