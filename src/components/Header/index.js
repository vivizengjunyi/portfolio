import React from 'react';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import {AiFillHome, AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {FaSun} from 'react-icons/fa';
import logo from '../../images/match-color-theme-logo.png';
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
            {/* <img src={logo} alt='logo' className='logo'/> */}
            <div className={burgerMenuShow === true ? "show btn-menu" : "btn-menu"} >
                <span className="btn-content" onClick={toggle}>
                    <span className="bar"></span>
                </span>
            </div>
            {burgerMenuShow === true &&
                <ul>
                    <li><AiFillHome className='icon'/><NavLink to="/" onClick={toggle}>Home</NavLink></li>
                    <li><AiOutlineFundProjectionScreen className='icon'/><a href="/#works" onClick={toggle}>Works</a></li>
                    <li><FaSun  className='icon'/><a href="/#about" onClick={toggle}>About</a></li>
                </ul>
            }
            <ul className='navbar'>
                    <li><AiFillHome className='icon'/><NavLink to="/">Home</NavLink></li>
                    <li><AiOutlineFundProjectionScreen className='icon'/><a href="/#works" >Works</a></li>
                    <li><FaSun className='icon'/><a href="/#about">About</a></li>
                </ul>
        </nav>
    )
}

export default Header;
