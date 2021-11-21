import React from 'react';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import Switch from "react-switch";
import {AiFillHome, AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {FaSun} from 'react-icons/fa';
import logo from '../../images/match-color-theme-logo.png';
import './index.css';


function Header() {
    
    const [burgerMenuShow, setBurgerMenuShow] = useState(false);
    const [theme, setTheme] = useState('yellow');

    const toggle = () => {
        if (burgerMenuShow === true) {
            setBurgerMenuShow(false);
        } else {
            setBurgerMenuShow(true);
        }
    }

    useEffect(() => {
        document.querySelector("#colorCss").href = `../${theme}.css`;
    }, [theme])

    return (
        <nav className="navigation">
            <NavLink to="/" className='logo-container'><img src={logo} alt='logo' className='logo'/></NavLink>
            <div className={burgerMenuShow === true ? "show btn-menu" : "btn-menu"} >
                <span className="btn-content" onClick={toggle}>
                    <span className="bar"></span>
                </span>
            </div>
            {burgerMenuShow === true &&
                <ul className='dropdown-menu'>
                    <li><NavLink to="/" onClick={toggle}><AiFillHome className='icon'/>Home</NavLink></li>
                    <li><a href="/#works" onClick={toggle}><AiOutlineFundProjectionScreen className='icon'/>Works</a></li>
                    <li><a href="/#about" onClick={toggle}><FaSun  className='icon'/>About</a></li>
                    <li><Switch checked={theme==='yellow'} onChange={(checked) => setTheme(checked? 'yellow':'blue')} onColor="#67AFCB" offColor="#B08A03" uncheckedIcon checkedIcon/></li>
                </ul>
            }
            <ul className='menu'>
                <li><NavLink to="/"><AiFillHome className='icon'/>Home</NavLink></li>
                <li><a href="/#works" ><AiOutlineFundProjectionScreen className='icon'/>Works</a></li>
                <li><a href="/#about"><FaSun className='icon'/>About</a></li>
                <li className='switch-item'><Switch checked={theme==='yellow'} onChange={(checked) => setTheme(checked? 'yellow':'blue')} onColor="#67AFCB" offColor="#B08A03" uncheckedIcon checkedIcon/></li>
            </ul>
        </nav>
    )
}

export default Header;
