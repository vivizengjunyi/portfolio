import React from 'react';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import {AiFillHome, AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {FaRegSmileBeam} from 'react-icons/fa';
import './index.css'

function Header() {
    const [burgerMenuShow, setBurgerMenuShow] = useState(false);

    const toggle = () => {
        if (burgerMenuShow === true) {
            setBurgerMenuShow(false);
        } else {
            setBurgerMenuShow(true);
        }
    }

    return (
        <nav className="navigation">
            <div className={burgerMenuShow === true ? "show btn-menu" : "btn-menu"} >
                <span className="btn-content" onClick={toggle}>
                    <span className="bar"></span>
                </span>
            </div>
            {burgerMenuShow === true &&
                <ul>
                    <li><AiFillHome className='icon'/><NavLink to="/" onClick={toggle}>Home</NavLink></li>
                    <li><AiOutlineFundProjectionScreen className='icon'/><NavLink to="/#works" onClick={toggle}>Works</NavLink></li>
                    <li>< FaRegSmileBeam  className='icon'/><NavLink to="/#about" onClick={toggle}>About</NavLink></li>
                </ul>
            }

        </nav>
    )
}

export default Header;
