import React, { useEffect, useState } from 'react'
import "./styles/nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img
                className="nav-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg">

            </img>
            <img
                className="nav-avatar"
                src="https://occ-0-2622-778.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeZakDz11ZWzhgfol0EvY3nQQfPNItHRE_Ek8LFdWkZ3fEf_a2By9czWI0zTV-AtR_B66axVhJUOqTD6vMmPlhnFyZaE.png?r=f71"
            >

            </img>


        </div>
    )
}

export default Nav
