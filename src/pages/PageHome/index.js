import React from 'react';
import projects from '../../globals/projects';
import about from '../../globals/about';
import Contact from '../../components/Contact';
import { MdDoubleArrow } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import "./index.css";
import placeholder from '../../images/portfolio-logo.png';
import me from '../../images/IMG_0751.jpg';

const PageHome = () => {
    return (
        <div>
            <section className="banner">
                <h1 className="animate__animated animate__bounceInDown">Hello! My name is <span> Junyi(vivi) Zeng,</span></h1>
                <p className="para2">a front-end web developer</p>
                <a href="#about"><MdDoubleArrow className='arrow' /></a>
            </section>
            <section className="works" id="works">
                <h2>My Projects</h2>
                <div className="projects">
                {projects.map((singleProject, i) =>
                    <div key={i} className='project-card'>
                        <img src={placeholder} alt='no name'/>
                        <div className='projectInfo'>
                            <h4>{singleProject.name}</h4>
                            <p>{singleProject.briefIntro}</p>
                            <input type="button" value="More Info"></input>
                        </div>
                    </div>
                )}
                </div>
            </section>
            <section className="about" id="about">
                <div className='about-wrapper'>
                <h2>About Me</h2>
                <img src={me} alt='my photo' />
                {about.map((singleAbout, i) => 
                <div className='about-content'>
                    <FaSun className='sun' />
                    <p>{singleAbout.content}</p>
                </div>
                )}
                </div>
            </section>
            <Contact />
        </div>
    )
}

export default PageHome;