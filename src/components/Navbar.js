import React from "react";

export default function Navbar(){
    return (
        <div className="nav" id="home">
            {/* <img src={logo} alt="Biome Data Systems Logo" className="nav-logo"></img> */}
            <h1 className="nav-logo">Biome Data Systems</h1>
            <ul className="nav-items">
                <li className="nav-about"><a href="#aboutus">About Us</a></li>
                <li className = "dropdown">
                    <span>Contact Us</span>
                    <div className="dropdown-content">
                        <li><a href="https://www.linkedin.com/company/biome-data-systems/" target="_blank">LinkedIn</a></li>
                        <li><a href="tel:951-450-1399">Call Us</a></li>
                        <li><a href = "mailto: advancement@biomedatasystems.com">Email Us</a></li>
                    </div>
                </li>
            </ul>
        </div>
    )
}